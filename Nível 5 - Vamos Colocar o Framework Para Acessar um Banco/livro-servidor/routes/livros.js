const { obterLivros, incluir, excluir } = require("../models/livro-dao");
var express = require('express');
var router = express.Router();

router.route("/").get(obterLivros)

router.route("/").post(incluir)

router.route("/:id").delete(excluir)


module.exports = router