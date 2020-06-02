import React, { useState, useEffect } from "react";
import "./App.css";
import NC from "./res/nc.png";
import LG from "./res/lg.png";
import OB from "./res/ob.png";
import WO from "./res/wo.png";
import HT from "./res/ht.png";
import LT from "./res/lt.png";
import KT from "./res/kt.png";
import SS from "./res/ss.png";
import SK from "./res/sk.png";
import HH from "./res/hh.png";

const images = {
  NC: NC,
  LG: LG,
  OB: OB,
  WO: WO,
  HT: HT,
  LT: LT,
  KT: KT,
  SS: SS,
  SK: SK,
  HH: HH,
};

export default function Team({ team }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    switch (team.team) {
      case "NC":
        setImage(images.NC);
        setName("NC");
        break;
      case "LG":
        setImage(images.LG);
        setName("LG");
        break;
      case "OB":
        setImage(images.OB);
        setName("두산");
        break;
      case "WO":
        setImage(images.WO);
        setName("키움");
        break;
      case "HT":
        setImage(images.HT);
        setName("KIA");
        break;
      case "LT":
        setImage(images.LT);
        setName("롯데");
        break;
      case "KT":
        setImage(images.KT);
        setName("kt");
        break;
      case "SS":
        setImage(images.SS);
        setName("삼성");
        break;
      case "SK":
        setImage(images.SK);
        setName("SK");
        break;
      case "HH":
        setImage(images.HH);
        setName("한화");
        break;
    }
  }, []);

  return (
    <div className="body">
      <div className="rank">
        <div className="rank-num">{team.ranking}</div>
        <div className="rank-team">
          <img src={image} alt=""></img>
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
