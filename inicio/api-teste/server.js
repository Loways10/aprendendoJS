import express from "express"
import cors from "cors"

const app = express() 
app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.json({
        name: "Akio",
        tel: "96865-8547"
    })
})

app.get("/list", (req, res) => {
    res.json([
        {
            name: "Akio",
            tel: "96587-8547",
            address: {
                street: "Juruá Nunes do Nascimento",
                number: "103",
                cep: "26113-470"
            }
        },
        {
            name: "Kenji",
            tel: "98524-6325"
        }
    ])
})

app.listen(3005, () => {
    console.log("server is running")
})