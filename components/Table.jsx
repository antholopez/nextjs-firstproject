export default function Table({ list }) {
  return (
    <table className="table table-success table-striped table-hover caption-top table-responsive-sm table-sm mt-5">
      <caption>Lista de compras</caption>
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio (S/.)</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {!list.length ? (
          <tr>
            <td colspan="5" class="table-active text-center">
              Lista de compras vacia
            </td>
          </tr>
        ) : (
          <>
            {list.map((item, index) => (
              <tr>
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
