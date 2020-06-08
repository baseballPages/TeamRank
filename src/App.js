import React, { useState, useEffect } from "react";
import "./App.css";
import Team from "./Team";
import { kboAPI } from "./API";
import html2canvas from "html2canvas";

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

  function saveAs(uri, filename) {
    // 캡쳐된 파일을 이미지 파일로 내보낸다.
    var link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  const onClickHandler = () => {
    console.log("clicked");
    html2canvas(document.getElementById("table"), { dpi: 144 });

    html2canvas(document.getElementById("table")).then((canvas) => {
      saveAs(canvas.toDataURL("image/png", 1.0), "team_rank.png");
    });
  };

  console.log(Data);
  return (
    <div className="App">
      <div id="table">
        <div className="title">팀 순위</div>
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
      <div>
        <button onClick={onClickHandler}>Capture</button>
      </div>
    </div>
  );
}

export default App;
