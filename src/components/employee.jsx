// src/components/Employee.jsx (or src/pages/Employee.jsx)
import { Link } from "react-router-dom";

export default function Employee() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">Overtime</div>
          <div className="row">
            <span className="badge">Employee</span>
            <Link className="badge" to="/login">Logout</Link>
          </div>
        </div>
      </nav>

      <section className="container hero">
        <h1>Available Overtime</h1>
        <p className="sub">Filter by airline and request your preferred shift.</p>

        {/* Filters */}
        <div className="card">
          <div className="grid grid-2">
            <div className="control">
              <label>Airline</label>
              <select className="select" defaultValue="All Airlines">
                <option>All Airlines</option>
                <option>Emirates</option>
                <option>Qatar Airways</option>
                <option>Etihad</option>
                <option>Turkish Airlines</option>
                <option>Lufthansa</option>
              </select>
            </div>
            <div className="control">
              <label>Date</label>
              <input className="input" type="date" />
            </div>
          </div>
        </div>

        {/* Shift cards */}
        <div className="grid grid-2" style={{ marginTop: 20 }}>
          {/* Card 1 */}
          <div className="card">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>Gate Support</h3>
              <span className="airline">Emirates</span>
            </div>
            <p className="sub">Terminal 1 • A380</p>
            <div className="row">
              <span className="badge">16 Sep</span>
              <span className="badge">18:00–23:00</span>
              <span className="badge">Slots: 2</span>
            </div>
            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn" type="button">Request Shift</button>
              <button className="btn ghost" type="button">Details</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>Check-in</h3>
              <span className="airline">Qatar Airways</span>
            </div>
            <p className="sub">T2 • Morning</p>
            <div className="row">
              <span className="badge">17 Sep</span>
              <span className="badge">05:00–10:00</span>
              <span className="badge">Slots: 1</span>
            </div>
            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn" type="button">Request Shift</button>
              <button className="btn ghost" type="button">Details</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>Arrivals</h3>
              <span className="airline">Etihad</span>
            </div>
            <p className="sub">Baggage & Connections</p>
            <div className="row">
              <span className="badge">18 Sep</span>
              <span className="badge">13:00–19:00</span>
              <span className="badge">Slots: 3</span>
            </div>
            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn" type="button">Request Shift</button>
              <button className="btn ghost" type="button">Details</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>Gate</h3>
              <span className="airline">Turkish Airlines</span>
            </div>
            <p className="sub">Evening flight • T1</p>
            <div className="row">
              <span className="badge">19 Sep</span>
              <span className="badge">07:00–12:00</span>
              <span className="badge">Slots: 1</span>
            </div>
            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn" type="button">Request Shift</button>
              <button className="btn ghost" type="button">Details</button>
            </div>
          </div>
        </div>

        {/* Requests table (now wrapped & compact) */}
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Your Requests</h3>
          <div className="table-wrap">
            <table className="table compact">
              <thead>
                <tr>
                  <th>Airline</th>
                  <th>Date</th>
                  <th className="hide-sm">Time</th>
                  <th className="hide-sm">Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="airline">Emirates</span></td>
                  <td>16 Sep</td>
                  <td className="hide-sm">18:00–23:00</td>
                  <td className="hide-sm">Gate</td>
                  <td><span className="badge">Pending</span></td>
                </tr>
                {/* more rows ... */}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="footer">Employee view • Prototype</div>
    </div>
  );
}
