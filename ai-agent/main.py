from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

from my_agent.agent import root_agent
from dotenv import load_dotenv

load_dotenv()


APP_NAME = "aws-helper"


app = FastAPI(
    title="AWS Helper Agent",
    version="1.0.0"
)


session_service = InMemorySessionService()

runner = Runner(
    app_name=APP_NAME,
    agent=root_agent,
    session_service=session_service
)


class ChatRequest(BaseModel):
    message: str
    user_id: str = "default-user"


class ChatResponse(BaseModel):
    response: str


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):

    try:

        session = await session_service.create_session(
            app_name=APP_NAME,
            user_id=request.user_id
        )

        message = types.Content(
            role="user",
            parts=[
                types.Part(text=request.message)
            ]
        )

        events = runner.run_async(
            user_id=request.user_id,
            session_id=session.id,
            new_message=message
        )

        final_response = ""

        async for event in events:

            if not hasattr(event, "content"):
                continue

            if not event.content:
                continue

            if not event.content.parts:
                continue

            for part in event.content.parts:

                if hasattr(part, "text") and part.text:
                    final_response += part.text

        return ChatResponse(
            response=final_response
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


if __name__ == "__main__":

    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )