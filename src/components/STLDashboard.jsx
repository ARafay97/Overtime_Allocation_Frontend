// src/pages/STLDashboard.jsx
import { Link } from "react-router-dom";



export default function STLDashboard() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">Overtime</div>
          <div className="row">
            <span className="badge">STL</span>
            <Link className="badge" to="/login">Logout</Link>
          </div>
        </div>
      </nav>

      <section className="container hero">
        <h1>STL Dashboard</h1>
        <p className="sub">Post new overtime shifts, view requests, and approve/decline.</p>

        <div className="grid grid-2">
          {/* Post Shift */}
          <div className="card">
            <h3>Post Overtime Shift</h3>
            <form className="grid" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid grid-2">
                <div className="control">
                  <label htmlFor="date">Date</label>
                  <input id="date" className="input" type="date" />
                </div>
                <div className="control">
                  <label htmlFor="time">Time</label>
                  <input id="time" className="input" type="time" />
                </div>
              </div>

              <div className="grid grid-2">
                <div className="control">
                  <label>Airline</label>
                  <select className="select" defaultValue="Emirates">
                    <option>Emirates</option>
                    <option>Qatar Airways</option>
                    <option>Etihad</option>
                    <option>Turkish Airlines</option>
                    <option>Lufthansa</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="control">
                  <label>Role</label>
                  <select className="select" defaultValue="Gate">
                    <option>Gate</option>
                    <option>Check-in</option>
                    <option>Arrivals</option>
                    <option>Ramp Support</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-2">
                <div className="control">
                  <label htmlFor="slots">Slots</label>
                  <input id="slots" className="input" type="number" min="1" defaultValue={2} />
                </div>
                <div className="control">
                  <label htmlFor="notes">Notes (optional)</label>
                  <input id="notes" className="input" type="text" placeholder="e.g. A380, T1, meet 3h prior" />
                </div>
              </div>

              <button className="btn" type="submit">Publish Shift</button>
            </form>
          </div>

          {/* Pending Requests */}
          <div className="card">
            <h3>Pending Requests</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Employee</th><th>Airline</th><th>Date</th><th>Time</th><th>Role</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R. Khan (012345)</td>
                  <td><span className="airline">Emirates</span></td>
                  <td>16 Sep</td>
                  <td>18:00–23:00</td>
                  <td>Gate</td>
                  <td className="row">
                    <button className="btn success" type="button">Accept</button>
                    <button className="btn danger" type="button">Decline</button>
                  </td>
                </tr>
                <tr>
                  <td>S. Ahmed (019876)</td>
                  <td><span className="airline">Qatar</span></td>
                  <td>17 Sep</td>
                  <td>05:00–10:00</td>
                  <td>Check-in</td>
                  <td className="row">
                    <button className="btn success" type="button">Accept</button>
                    <button className="btn danger" type="button">Decline</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Posted Shifts */}
          <div className="card">
            <h3>Posted Shifts</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Airline</th><th>Date</th><th>Time</th><th>Role</th><th>Slots</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="airline">Etihad</span></td>
                  <td>18 Sep</td>
                  <td>13:00–19:00</td>
                  <td>Arrivals</td>
                  <td>3</td>
                  <td><span className="badge">Open</span></td>
                </tr>
                <tr>
                  <td><span className="airline">Turkish</span></td>
                  <td>19 Sep</td>
                  <td>07:00–12:00</td>
                  <td>Gate</td>
                  <td>1</td>
                  <td><span className="badge">Open</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="card">
            <p className="kicker">Notes</p>
            <p className="sub">This is a static prototype. Buttons don’t change data — perfect for screenshots.</p>
          </div>
        </div>
      </section>

      <div className="footer">STL view • Prototype</div>
    </div>
  );
}
