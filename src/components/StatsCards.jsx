import respiratoryIcon from "../assets/images/respiratory rate.svg";
import temperatureIcon from "../assets/images/temperature.svg";
import heartIcon from "../assets/images/HeartBPM.svg";
import arrowUp from "../assets/images/ArrowUp.svg";
import arrowDown from "../assets/images/ArrowDown.svg";

function StatsCards({ patient }) {
    if (!patient || !patient.diagnosis_history?.length) {
        return <div>Loading...</div>;
    }

    const latest = patient.diagnosis_history[0];

    return (
        <div className="stats-cards">
            {/* Respiratory Rate */}
            <div className="card respiratory">
                <img
                    src={respiratoryIcon}
                    alt="Respiratory Rate"
                    className="stat-icon"
                />

                <h3>Respiratory Rate</h3>

                <h2>{latest.respiratory_rate.value} bpm</h2>

                <p>{latest.respiratory_rate.levels}</p>
            </div>

            {/* Temperature */}
            <div className="card temperature">
                <img
                    src={temperatureIcon}
                    alt="Temperature"
                    className="stat-icon"
                />

                <h3>Temperature</h3>

                <h2>{latest.temperature.value}°F</h2>

                <p>{latest.temperature.levels}</p>
            </div>

            {/* Heart Rate */}
            <div className="card heart">
                <img
                    src={heartIcon}
                    alt="Heart Rate"
                    className="stat-icon"
                />

                <h3>Heart Rate</h3>

                <h2>{latest.heart_rate.value} bpm</h2>

                <div className="heart-status">
                    <img
                        src={
                            latest.heart_rate.levels.toLowerCase().includes("lower")
                                ? arrowDown
                                : arrowUp
                        }
                        alt="Trend"
                        className="arrow-icon"
                    />

                    <p>{latest.heart_rate.levels}</p>
                </div>
            </div>
        </div>
    );
}

export default StatsCards;