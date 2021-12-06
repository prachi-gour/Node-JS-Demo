const express = require("express")

const app = express()

require("./Routes/routes")(app)
const PORT = 9999; 
app.listen(PORT, () => {
    console.log(`Server start hogaya hai at ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})
