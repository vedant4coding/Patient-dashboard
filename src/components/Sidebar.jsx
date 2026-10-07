import searchIcon from "../assets/images/search_FILL0_wght300_GRAD0_opsz24.svg";
import moreIcon from "../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

function Sidebar({ patients }) {
  if (!patients || patients.length === 0) {
    return <div className="sidebar">Loading...</div>;
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Patients</h2>

        <button className="search-btn">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      <div className="patient-list">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={`patient-item ${patient.name === "Jessica Taylor" ? "active-patient" : ""
              }`}
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="patient-avatar"
            />

            <div className="patient-info">
              <h4>{patient.name}</h4>
              <p>
                {patient.gender}, {patient.age}
              </p>
            </div>

            <button className="more-btn">
              <img src={moreIcon} alt="More" />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;