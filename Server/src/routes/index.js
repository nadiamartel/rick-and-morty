const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deletefav } = require("../controllers/handleFavorites")

const express = require("express");
const router = express.Router();

router.get("/character/:id", (req, res) => {
    getCharById(req, res)
})

router.get("/login", (req, res) => {
    login(req, res)
})

router.post("/fav", (req, res) => {
    postFav(req, res)
})

router.delete("/fav/:id", (req, res) => {
    deletefav(req, res)
})

//es lo mismo que hacer:
//router.get("/character/:id", getCharacterById) >> aca ajecutamos la fn
 
module.exports = router;