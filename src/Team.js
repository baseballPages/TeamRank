import React from "react";
import "./App.css";

export default function Team({ team }) {
  var url = "";
  var name = "";
  switch (team.team) {
    case "NC":
      url =
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/NC_Dinos_Emblem.svg/1200px-NC_Dinos_Emblem.svg.png";
      name = "NC";
      break;
    case "LG":
      url =
        "https://upload.wikimedia.org/wikipedia/commons/4/41/LG_Twins_2017.png";
      name = "LG";
      break;
    case "OB":
      url =
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Doosan_Bears.svg/1200px-Doosan_Bears.svg.png";
      name = "두산";
      break;
    case "WO":
      url = "https://upload.wikimedia.org/wikipedia/en/4/4f/Kiwoom_Heroes.png";
      name = "키움";
      break;
    case "HT":
      url =
        "https://upload.wikimedia.org/wikipedia/en/e/e0/Kia_Tigers_2017_New_Team_Logo.png";
      name = "KIA";
      break;
    case "LT":
      url = "https://upload.wikimedia.org/wikipedia/en/d/d9/Lotte_Giants.png";
      name = "롯데";
      break;
    case "KT":
      url =
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/KT_Wiz.svg/1200px-KT_Wiz.svg.png";
      name = "kt";
      break;
    case "SS":
      url =
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Samsung_Lions.svg/1200px-Samsung_Lions.svg.png";
      name = "삼성";
      break;
    case "SK":
      url = "https://upload.wikimedia.org/wikipedia/en/5/5c/SK_Wyverns.png";
      name = "SK";
      break;
    case "HH":
      url =
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hanwha_Eagles.svg/1200px-Hanwha_Eagles.svg.png";
      name = "한화";
      break;
  }

  return (
    <div className="body">
      <div className="rank">
        <div className="rank-num">{team.ranking}</div>
        <div className="rank-team">
          <img src={url} alt=""></img>
          <div>{name}</div>
        </div>
      </div>
      <div className="game">{team.game}</div>
      <div className="win">{team.win}</div>
      <div className="draw">{team.draw}</div>
      <div className="lose">{team.lose}</div>
      <div className="win-gap">{team.gb}</div>
      <div className="win-rate">{team.wra}</div>
      <div className="recently">
        {team.last_ten_w}승 {team.last_ten_d}무 {team.last_ten_l}패
      </div>
    </div>
  );
}
