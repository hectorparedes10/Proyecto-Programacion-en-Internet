import { useState, useEffect } from "react";
import { getClientes, addCliente } from "../services/api";

function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: "", telefono: "", direccion: "" });

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    const res = await getClientes();
    setClientes(res.data);
  };

  const handleAdd = async () => {
    await addCliente(nuevo);
    cargarClientes();
  };

  return (
    <div>
      <h2>Gestión de Clientes</h2>
      <input placeholder="Nombre" onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })}/>
      <input placeholder="Teléfono" onChange={e => setNuevo({ ...nuevo, telefono: e.target.value })}/>
      <input placeholder="Dirección" onChange={e => setNuevo({ ...nuevo, direccion: e.target.value })}/>
      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {clientes.map(c => (
          <li key={c.id}>{c.nombre} - {c.telefono} - {c.direccion}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientesPage;
