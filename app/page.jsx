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
        <div className="d-flex gap-2 justify-content-center pt-4 pb-5">
          <button className="btn btn-success rounded-circle">
            <i
              className="bi bi-mic-fill"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></i>
          </button>
          <button className="btn btn-danger rounded-circle">
            <i
              className="bi bi-pause-circle-fill"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></i>
          </button>
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn">
            <i
              className="bi bi-trash3-fill"
              style={{ fontSize: "1.5rem", color: "gray" }}
            ></i>
          </button>
          <button className="btn btn-primary rounded">
            <i className="bi bi-save me-2" style={{ fontSize: "" }}></i>
            Registrar
          </button>
        </div>
      </div>
    </>
  );
}
