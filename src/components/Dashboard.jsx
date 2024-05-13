import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = ({ userData }) => {
  if (!userData) {
    console.error("No userData provided");
    return null;
  }

  const { name, wins, losses, draws } = userData;

  if (isNaN(wins) || isNaN(losses) || isNaN(draws)) {
    console.error("Invalid data:", { wins, losses, draws });
    return <div>Error: Invalid data</div>;
  }

  const data = [
    { name: 'Wins', value: wins },
    { name: 'Losses', value: losses },
    { name: 'Draws', value: draws }
  ];

  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <div style={{ width: "600px", height: "400px", margin: "20px auto" }}>
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
