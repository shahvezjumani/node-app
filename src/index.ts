import express from "express"

const app = express()

const PORT = process.env.PORT || 3000

export function getCurrentTime(): string {
    const now = new Date()
    return now.toISOString()
}

app.get("/health",(req, res) => {
    res.json({ status: "ok" })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})