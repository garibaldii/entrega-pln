function startVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition()
    recognition.lang = "pt-BR"

    recognition.start()

    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript

        document.getElementById("input").value = text
    }
}

async function sendMessage() {
    const input = document.getElementById("input");
    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    // cria mensagem temporária
    const loadingMsg = addMessage("Carregando...", "bot");

    try {
        const apiURL = process.env.API_URL

        const res = await fetch(
            `${apiURL}/chat`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: text,
                    user_id: "matheus"
                })
            }
        );

        const data = await res.json();
        const answer = data.response || JSON.stringify(data);

        addMessage(answer, "bot");

    } catch (error) {
        addMessage("Erro ao processar a mensagem.", "bot");
        console.error(error);
    }
}

function addMessage(text, type) {
    const chat = document.getElementById("chat");

    const msg = document.createElement("div");
    msg.classList.add("msg", type);
    msg.innerText = text;

    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}