import { Link } from "react-router-dom";



export default function Register() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">Overtime</div>
          <div className="badge">Demo Prototype</div>
        </div>
      </nav>

      <section className="container hero">
        <h1>Create account</h1>
        <p className="sub">Choose your role to get started.</p>

        <div className="card" style={{ maxWidth: "680px" }}>
          <form className="grid grid-2">
            <div className="control">
              <label>Full Name</label>
              <input className="input" type="text" placeholder="Abdul Rafay" />
            </div>
            <div className="control">
              <label>Email</label>
              <input className="input" type="email" placeholder="you@company.com" />
            </div>
            <div className="control">
              <label>Password</label>
              <input className="input" type="password" placeholder="Create a password" />
            </div>
            <div className="control">
              <label>Role</label>
              <select className="select">
                <option>Employee</option>
                <option>Shift Team Leader (STL)</option>
              </select>
            </div>
            <div className="control">
              <label>Staff ID</label>
              <input className="input" type="text" placeholder="e.g. 012345" />
            </div>
            <div className="control">
              <label>Preferred Airline</label>
              <select className="select">
                <option>Any Airline</option>
                <option>Emirates</option>
                <option>Qatar Airways</option>
                <option>Etihad</option>
                <option>Turkish Airlines</option>
                <option>Lufthansa</option>
              </select>
            </div>
            <Link className="btn" to="/login">Create account</Link>
            <Link className="btn" to="/login">Back to Login</Link>
          </form>
        </div>
      </section>

      <div className="footer">© Prototype only.</div>
    </div>
  );
}
