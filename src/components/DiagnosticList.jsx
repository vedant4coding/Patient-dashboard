function DiagnosticList() {
  const diagnostics = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
  ];

  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>

      <div className="table-wrapper">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem / Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {diagnostics.map((item, index) => (
              <tr key={index}>
                <td>{item.problem}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DiagnosticList;