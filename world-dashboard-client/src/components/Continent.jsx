import React, { useEffect, useState } from "react";
import { populationByContient } from "../API/api";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Continent = () => {
  const [continent, setContinent] = useState([]);

  const fetchData = async () => {
    const data = await populationByContient();
    setContinent(data);
  };
  useEffect(() => {
    fetchData();
    console.log(continent, "In continent file");
  }, []);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28EFF",
    "#FF66C4",
    "#999999",
  ];

  // Convert population to number
  const data = continent.map((item) => ({
    Continent: item.Continent,
    Population: Number(item.CPopulation),
  }));

  return (
    <>
      Continents:
      <ul>
        {continent.length > 0 &&
          continent.map((c, i) => <li key={i}>{c.Continent}</li>)}
      </ul>
      
    <div style={{ width: '70%', height: 400  , }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Continent" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Population" fill="#0f2862" />
        </BarChart>
      </ResponsiveContainer>
    </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="Population"
              nameKey="Continent"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Continent;