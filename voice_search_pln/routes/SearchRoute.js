const express = require("express")
const router = express.Router()

router.post("/chat", async (req, res) => {
    try {
        const response = await fetch(
            `${process.env.API_URL}/chat`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            }
        );

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Erro no servidor Express"
        });
    }
});

module.exports = router