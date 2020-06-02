import axios from "axios";

export const makeRequest = () =>
  axios.get("/ws/KBORank.asmx/TeamRank", {
    params: {
      nickname: "test",
      season: "2020",
      tag: "0",
    },
  });

export const kboAPI = {
  rankRequest: () => makeRequest(),
};
