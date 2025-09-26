// src/components/STLDashboard.jsx  (or src/pages/STLDashboard.jsx)
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
                  <input id="date" className="select" type="date" />
                </div>
                <div className="control">
                  <label htmlFor="time">Time</label>
                  <input id="time" className="select" type="time" />
                </div>
              </div>

              <div className="grid grid-2">
                <div className="control">
                  <label htmlFor="airline">Airline</label>
                  <select id="airline" className="select" defaultValue="Emirates">
                    <option>Emirates</option>
                    <option>Qatar Airways</option>
                    <option>Etihad</option>
                    <option>Turkish Airlines</option>
                    <option>Lufthansa</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="control">
                  <label htmlFor="role">Role</label>
                  <select id="role" className="select" defaultValue="Gate">
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
            <div className="table-wrap">
              <table className="table compact">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th className="hide-sm">Airline</th>
                    <th>Date</th>
                    <th className="hide-sm">Time</th>
                    <th className="hide-sm">Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>R. Khan (012345)</td>
                    <td className="hide-sm"><span className="airline">Emirates</span></td>
                    <td>16 Sep</td>
                    <td className="hide-sm">18:00–23:00</td>
                    <td className="hide-sm">Gate</td>
                    <td className="row">
                      <button className="btn success" type="button">Accept</button>
                      <button className="btn danger" type="button">Decline</button>
                    </td>
                  </tr>
                  <tr>
                    <td>S. Ahmed (019876)</td>
                    <td className="hide-sm"><span className="airline">Qatar</span></td>
                    <td>17 Sep</td>
                    <td className="hide-sm">05:00–10:00</td>
                    <td className="hide-sm">Check-in</td>
                    <td className="row">
                      <button className="btn success" type="button">Accept</button>
                      <button className="btn danger" type="button">Decline</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Posted Shifts */}
          <div className="card">
            <h3>Posted Shifts</h3>
            <div className="table-wrap">
              <table className="table compact">
                <thead>
                  <tr>
                    <th>Airline</th>
                    <th>Date</th>
                    <th className="hide-sm">Time</th>
                    <th className="hide-sm">Role</th>
                    <th>Slots</th>
                    <th className="hide-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="airline">Etihad</span></td>
                    <td>18 Sep</td>
                    <td className="hide-sm">13:00–19:00</td>
                    <td className="hide-sm">Arrivals</td>
                    <td>3</td>
                    <td className="hide-sm"><span className="badge">Open</span></td>
                  </tr>
                  <tr>
                    <td><span className="airline">Turkish</span></td>
                    <td>19 Sep</td>
                    <td className="hide-sm">07:00–12:00</td>
                    <td className="hide-sm">Gate</td>
                    <td>1</td>
                    <td className="hide-sm"><span className="badge">Open</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          <div className="card">
            <p className="kicker">Notes</p>
            <p className="sub">This is a static prototype. Buttons don’t change data.</p>
          </div>
        </div>
      </section>

      <div className="footer">STL view • Prototype</div>
    </div>
  );
}
