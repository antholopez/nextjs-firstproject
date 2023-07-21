export default async function IndexPage() {
  return (
    <>
      <div className="form-floating mx-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label htmlFor="floatingTextarea2">Nota de voz...</label>
        <div className="mt-1">
          <button className="btn">
            <i className="bi bi-mic-fill" style={{ fontSize: "1.5rem" }}></i>
          </button>
          <button className="btn">
            <i
              className="bi bi-pause-circle"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </button>
          <button className="btn">
            <i className="bi bi-trash3-fill" style={{ fontSize: "1.5rem" }}></i>
          </button>
          <button className="btn">
            <i className="bi bi-save" style={{ fontSize: "1.5rem" }}></i>
          </button>
        </div>
      </div>
    </>
  );
}
