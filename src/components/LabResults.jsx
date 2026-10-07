import downloadIcon from "../assets/images/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

function LabResults({ patient }) {
  const reports = patient?.lab_results || [];

  return (
    <div className="lab-results">
      <h2>Lab Results</h2>

      <div className="lab-list">
        {reports.map((report, index) => (
          <div className="lab-item" key={index}>
            <span>{report}</span>

            <button className="download-btn">
              <img src={downloadIcon} alt="Download" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabResults;