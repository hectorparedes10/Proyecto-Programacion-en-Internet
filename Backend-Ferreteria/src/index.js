const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const productosRoutes = require("./routes/productos");
const clientesRoutes = require("./routes/clientes");

app.use("/api/productos", productosRoutes);
app.use("/api/clientes", clientesRoutes);

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");

});
