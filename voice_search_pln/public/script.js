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

async function search(){
    const text = document.getElementById("input").value

    const res = await fetch(`/api/search?q=${text}`)

    const data = await res.json()

    document.getElementById("result").textContent = JSON.stringify(data, null, 2)
}