
import doctorImage from "../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import logo from "../assets/images/TestLogo.svg";

import homeIcon from "../assets/images/home_FILL0_wght300_GRAD0_opsz24.svg";
import patientIcon from "../assets/images/group_FILL0_wght300_GRAD0_opsz24.svg";
import scheduleIcon from "../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import messageIcon from "../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import transactionIcon from "../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg";

import settingsIcon from "../assets/images/settings_FILL0_wght300_GRAD0_opsz24.svg";
import moreIcon from "../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src={logo}
          alt="Tech.Care"
          className="logo-img"
        />
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#" className="nav-item">
          <img src={homeIcon} alt="" />
          <span>Overview</span>
        </a>

        <a href="#" className="nav-item active">
          <img src={patientIcon} alt="" />
          <span>Patients</span>
        </a>

        <a href="#" className="nav-item">
          <img src={scheduleIcon} alt="" />
          <span>Schedule</span>
        </a>

        <a href="#" className="nav-item">
          <img src={messageIcon} alt="" />
          <span>Message</span>
        </a>

        <a href="#" className="nav-item">
          <img src={transactionIcon} alt="" />
          <span>Transactions</span>
        </a>
      </div>

      {/* Doctor */}
      <div className="profile-section">

        <div className="patient-item doctor-profile">

          <div className="patient-avatar">
            <img
              src={doctorImage}
              alt="Dr. Jose Simmons"
              className="doctor-image"
            />
          </div>

          <div className="patient-info">
            <h4>Dr. Jose Simmons</h4>
            <p>General Practitioner</p>
          </div>

          <div className="profile-icons">
            <button className="icon-btn">
              <img src={settingsIcon} alt="Settings" />
            </button>

            <button className="icon-btn">
              <img src={moreIcon} alt="More" />
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;