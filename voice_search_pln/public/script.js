function startVoice(){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition()
    recognition.lang = "pt-BR"

    recognition.start()

    recognition.onresult = function(event){
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

    const res = await fetch(`/api/search?q=${encodeURIComponent(text)}`);
    const data = await res.json();

    // ajuste aqui dependendo do seu backend
    const answer = data.response || JSON.stringify(data);

    addMessage(answer, "bot");
}

function addMessage(text, type) {
    const chat = document.getElementById("chat");

    const msg = document.createElement("div");
    msg.classList.add("msg", type);
    msg.innerText = text;

    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}