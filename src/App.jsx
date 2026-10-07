import { useEffect, useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import ProfileCard from "./components/ProfileCard";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get("/");

        setPatients(response.data);

        const jessica = response.data.find(
          (p) => p.name === "Emily Williams"
        );

        setPatient(jessica);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (!patient) return <h2>Patient not found.</h2>;

  return (
    <div className="app">
      <Navbar />

      <div className="dashboard">
        {/* Left Sidebar */}
        <Sidebar patients={patients} />

        {/* Middle Column */}
        <div className="middle-column">
          <DiagnosisHistory patient={patient} />
          <DiagnosticList patient={patient} />
        </div>

        {/* Right Column */}
        <div className="right-column">
          <ProfileCard patient={patient} />
          <LabResults patient={patient} />
        </div>
      </div>
    </div>
  );
}

export default App;