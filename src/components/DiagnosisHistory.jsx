import BloodPressureChart from "./BloodPressureChart";
import StatsCards from "./StatsCards";

import expandMore from "../assets/images/expand_more_FILL0_wght300_GRAD0_opsz24.svg";

function DiagnosisHistory({ patient }) {
  return (
    <section className="diagnosis-history">

      <h2 className="section-title">Diagnosis History</h2>

      <div className="bp-card">

        <div className="bp-content">

          <div className="bp-chart">
            <div className="bp-header">

              <h3>Blood Pressure</h3>

              <button className="history-filter">
                <span>Last 6 Months</span>
                <img src={expandMore} alt="" />
              </button>

            </div>
            <BloodPressureChart patient={patient} />
          </div>

          <div className="bp-summary">

            <div className="summary-item">
              <div className="summary-label">
                <span className="dot systolic"></span>
                <span>Systolic</span>
              </div>

              <h1>160</h1>

              <p>Higher than Average</p>
            </div>

            <hr />

            <div className="summary-item">
              <div className="summary-label">
                <span className="dot diastolic"></span>
                <span>Diastolic</span>
              </div>

              <h1>78</h1>

              <p>Lower than Average</p>
            </div>

          </div>

        </div>

      </div>

      <StatsCards patient={patient} />

    </section>
  );
}

export default DiagnosisHistory;