"use client";
import { useGlobalState } from "../context/GlobalState";

export default function Table() {
  const { list } = useGlobalState();

  return (
    <table className="table table-success table-striped table-hover caption-top table-responsive-sm table-sm mt-5">
      <caption>Lista de compras</caption>
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio (S/.)</th>
          <th scope="col">Cantidad (kg|lt|sobres)</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {!list.length ? (
          <tr>
            <td colSpan="5" className="table-active text-center">
              Lista de compras vacia
            </td>
          </tr>
        ) : (
          <>
            {list.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}
