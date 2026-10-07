import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function BloodPressureChart({ patient }) {
  if (!patient || !patient.diagnosis_history) {
    return <div>Loading...</div>;
  }

  const data = patient.diagnosis_history.map((item) => ({
    month: item.month.substring(0, 3),
    systolic: item.blood_pressure.systolic.value,
    diastolic: item.blood_pressure.diastolic.value,
  }));

  return (
    <div className="bp-chart-container">
      <div style={{ marginLeft: "-30px", width: "100%", height: "250px" }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis
              domain={[60, "dataMax + 10"]}
              ticks={[60, 80, 100, 120, 140, 160, 180]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#E66FD2"
              strokeWidth={2}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#8C6CF3"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BloodPressureChart;