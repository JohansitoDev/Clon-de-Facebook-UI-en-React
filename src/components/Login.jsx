function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '100vh' }}>
      <div className="row w-100">
        <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start mb-5 mb-lg-0">
          <h1 className="text-primary fw-bold" style={{ fontSize: '5rem' }}>facebook</h1>
          <p className="fs-3">
            Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Correo electrónico o número de teléfono"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="d-grid gap-2 mb-3">
                  <button type="submit" className="btn btn-primary btn-lg fw-bold">
                    Iniciar sesión
                  </button>
                </div>
                <div className="text-center mb-3">
                  <a href="#" className="text-decoration-none">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <hr />
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-success btn-lg fw-bold" style={{ backgroundColor: '#42b72a', borderColor: '#42b72a' }}>
                    Crear cuenta nueva
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-white border-0 text-center py-4">
              <a href="#" className="fw-bold text-decoration-none">
                Crear una página
              </a>
              &nbsp;para una celebridad, una marca o un negocio.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;