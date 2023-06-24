const express = require("express")
const app = express()
const hbs = require("hbs")

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)
hbs.registerPartials(`${__dirname}/views/partials`)

// Middleware para bootstrap
app.use("/bootstrap",express.static(`${__dirname}/node_modules/bootstrap/dist`))

// Middleware para archivos públicos
app.use(express.static(`${__dirname}/public`))

app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000");
})

app.get("/", (request, response) => {
    response.render("index")
})