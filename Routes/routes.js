module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json({message: "Hello"})
    })

    app.get("/prachi", (req, res) => {
        res.status(201).send("Hello Prachi")
    })
}