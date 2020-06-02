import React, { useState, useEffect } from "react";
import "./App.css";
import Team from "./Team";
import { kboAPI } from "./API";

function App() {
  const [Data, setData] = useState(null);

  const getData = async () => {
    const {
      data: { rank },
    } = await kboAPI.rankRequest();
    setData(rank);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {Data ? (
        <div className="container" id="container">
          <div className="header">
            <div className="rank-header">순위</div>
            <div className="game">경기</div>
            <div className="win">승</div>
            <div className="draw">무</div>
            <div className="lose">패</div>
            <div className="win-gap">승차</div>
            <div className="win-rate">승률</div>
            <div className="recently">최근 10경기</div>
          </div>
          <Team team={Data[0]} />
          <Team team={Data[1]} />
          <Team team={Data[2]} />
          <Team team={Data[3]} />
          <Team team={Data[4]} />
          <Team team={Data[5]} />
          <Team team={Data[6]} />
          <Team team={Data[7]} />
          <Team team={Data[8]} />
          <Team team={Data[9]} />
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default App;
