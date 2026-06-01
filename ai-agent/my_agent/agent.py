from google.adk.agents.llm_agent import Agent
from google.genai.types import GenerateContentConfig

from my_agent.tools.aws_tool import search_aws_docs

root_agent = Agent(
    model="gemini-2.5-flash",
    name="aws_helper_agent",
    description="Assistente AWS enxuto.",
    instruction="""
Você é especialista em AWS.

Regras:
- Responda em até 5 frases.
- Seja direto.
- Use linguagem simples.
- Evite detalhes desnecessários.
- Sempre dê um exemplo ou analogia curta.

Para dúvidas sobre AWS:
1. Use search_aws_docs.
2. Baseie a resposta na documentação.
3. Explique para iniciantes.
""",
    tools=[search_aws_docs],
    generate_content_config=GenerateContentConfig(
        temperature=0.1,
    )
)