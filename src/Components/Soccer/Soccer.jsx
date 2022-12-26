import React, { useEffect, useState } from "react";
import config from "../../Configuration/config";
import DownloadFileManager from "../../Services/DownloadFileManager";
import CommonUtility from "../../Utils/CommonUtility";
import { groupBy } from "lodash";
import SoccerMatch from "./SoccerMatch";
const Football = () => {
  let [soccerMatches, setSoccerMatches] = useState([]);
  useEffect(() => {
    (async () => {
      await GetMatches();
    })();
  }, []);

  async function GetMatches() {
    // debugger;
    try {
      let body = {
        sportId: 1,
        Date: CommonUtility.GetStringDate(new Date()),
        countryName: "Engalnd",
        countryCode: "Eng",
        minOdd: "",
        isMobile: 1,
        ProbRange: 0,
        sortingVal: 0,
        filter: 0,
        pageNo: 0,
      };
      let response = await DownloadFileManager.DownloadStringFromURL(
        `${config.API_URL}${config.MATCHES_LIST}`,
        body
      );
      if (
        response?.success &&
        response?.sportccbetdata !== null &&
        response?.sportccbetdata?.Matches !== null
      ) {
        PopulateSoccerMatches(response.sportccbetdata.Matches);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const PopulateSoccerMatches = (matches) => {
    let MatchesList = [];
    let groupedMatches = groupBy(
      matches,
      (m) => `${m.ContestGroupName}_${m.SortOrder}`
    );
    for (const gm of Object.entries(groupedMatches)) {
      let [ContestGroupName, SortOrder] = gm[0].split("_");
      let match = {
        ContestGroupName: ContestGroupName,
        SortOrder: Number(SortOrder),
        Matches: GetMatchesList(gm[1]),
      };
      MatchesList.push(match);
    }
    setSoccerMatches(MatchesList);
  };
  const GetMatchesList = (allMatches) => {
    let matches = [];
    for (const m of allMatches) {
      matches.push({
        HomeTeamId: m.HomeTeamId,
        HomeTeamName: m.HomeTeam,
        HomeTeamLogo: m.HomeTeamLogo,
        AwayTeamId: m.AwayTeamId,
        AwayTeamName: m.AwayTeam,
        AwayTeamLogo: m.AwayTeamLogo,
        MatchScore: m.MatchScore,
        CurrentMinute: m.CurrentMinute,
        MatchId: m.MatchId,
        MatchStatus: m.MatchStatus,
        MatchTime: m.MatchTime,
        MatchURL: `/result_center?page=soccer%2Fsoccer-matchinfo%2F${m.MatchId}`,
      });
    }
    return matches;
  };
  return (
    <>{soccerMatches.length > 0 && <SoccerMatch data={soccerMatches} />}</>
  );
};

export default Football;
