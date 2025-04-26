// import React from 'react'
// import TotalPopulation from '../components/TotalPopulation'
// import TotalCountries from '../components/Totalcountries'
// import Continent from '../components/Continent'

// const Dashboard = () => {
//   return (
//     <div>
//       <h1 style={{color:"#2d545e", textAlign:"center"}}>Dashboard</h1>
//       <TotalPopulation />
//       <TotalCountries />
//       <Continent />
//     </div>
//   )
// }

// export default Dashboard



import React from 'react';
import TotalPopulation from '../components/TotalPopulation';
import TotalCountries from '../components/Totalcountries';
import Continent from '../components/Continent';




const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 style={{color: "#fff", textAlign: "center", marginBottom: "30px", textShadow: "0 2px 4px rgba(0,0,0,0.2)"}}>
        World Population Dashboard
      </h1>
      
      <div className="dashboard-card">
        <TotalPopulation />
      </div>
      
      <div className="dashboard-card">
        <TotalCountries />
      </div>
      
      <div className="dashboard-card">
        <Continent />
      </div>
    </div>
  );
};

export default Dashboard;