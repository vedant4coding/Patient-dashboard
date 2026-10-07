
import birthIcon from "../assets/images/BirthIcon.svg";
import femaleIcon from "../assets/images/FemaleIcon.svg";
import phoneIcon from "../assets/images/PhoneIcon.svg";
import insuranceIcon from "../assets/images/InsuranceIcon.svg";


function ProfileCard({ patient }) {
  if (!patient) {
    return <div>Loading...</div>;
  }

  const dob = new Date(patient.date_of_birth).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="profile-card">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="profile-image"
      />

      <h2>{patient.name}</h2>

      <div className="profile-details">

        <div className="profile-item">
          <div className="profile-icon">
            <img src={birthIcon} alt="Birth" />
          </div>

          <div className="profile-info">
            <p>Date Of Birth</p>
            <h4>{dob}</h4>
          </div>
        </div>

        <div className="profile-item">
          <div className="profile-icon">
            <img src={femaleIcon} alt="Gender" />
          </div>

          <div className="profile-info">
            <p>Gender</p>
            <h4>{patient.gender}</h4>
          </div>
        </div>

        <div className="profile-item">
          <div className="profile-icon">
            <img src={phoneIcon} alt="Phone" />
          </div>

          <div className="profile-info">
            <p>Contact Info.</p>
            <h4>{patient.phone_number}</h4>
          </div>
        </div>

        <div className="profile-item">
          <div className="profile-icon">
            <img src={phoneIcon} alt="Emergency" />
          </div>

          <div className="profile-info">
            <p>Emergency Contacts</p>
            <h4>{patient.emergency_contact}</h4>
          </div>
        </div>

        <div className="profile-item">
          <div className="profile-icon">
            <img src={insuranceIcon} alt="Insurance" />
          </div>

          <div className="profile-info">
            <p>Insurance Provider</p>
            <h4>{patient.insurance_type}</h4>
          </div>
        </div>

      </div>
      <button className="profile-btn">
        Show All Information
      </button>
    </div>
  );
}

export default ProfileCard;