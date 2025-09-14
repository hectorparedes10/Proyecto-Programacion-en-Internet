const express = require("express");
const router = express.Router();
const sql = require("mssql");
const config = require("../db");

router.get("/", async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM productos");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { nombre, categoria, precio, stock } = req.body;
  try {
    let pool = await sql.connect(config);
    await pool.request()
      .input("nombre", sql.VarChar, nombre)
      .input("categoria", sql.VarChar, categoria)
      .input("precio", sql.Decimal(10, 2), precio)
      .input("stock", sql.Int, stock)
      .query("INSERT INTO productos (nombre, categoria, precio, stock) VALUES (@nombre, @categoria, @precio, @stock)");
    res.json({ message: "Producto agregado" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
