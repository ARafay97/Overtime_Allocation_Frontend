import { Link } from "react-router-dom";



export default function Login() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">Overtime</div>
          <div className="badge">Demo Prototype</div>
        </div>
      </nav>

      <section className="container hero">
        <h1>Welcome back</h1>
        <p className="sub">Sign in to request or manage overtime shifts.</p>

        <div className="card" style={{ maxWidth: "520px" }}>
          <form className="grid">
            <div className="control">
              <label>Email</label>
              <input className="input" type="email" placeholder="you@company.com" />
            </div>
            <div className="control">
              <label>Password</label>
              <input className="input" type="password" placeholder="••••••••" />
            </div>
            <div className="row" style={{ justifyContent: "space-between", width: "100%" }}>
              <Link className="btn" to="/employee">Login as Employee</Link>
              <Link className="btn ghost" to="/stl">Login as STL</Link>
            </div>
            <Link className="btn block ghost" to="/register">Create an account</Link>
          </form>
        </div>
      </section>

      <div className="footer">© Prototype only. No live data.</div>
    </div>
  );
}
