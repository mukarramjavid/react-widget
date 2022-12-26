import React from "react";
import config from "../../Configuration/config";

const SoccerMatch = ({ data }) => {
  const onImageError = (e) => {
    e.target.src = `${config.rootURL}images/official-logo-soon.jpg`;
  };
  // debugger;
  return (
    <>
      <div className="featured-sports">
        {data.map((cg, i) => {
          return (
            <div className="ft-widget" key={cg.ContestGroupName}>
              <div className="matchcard-head">
                <span>{cg.ContestGroupName}</span>
              </div>
              {cg.Matches.map((m, index) => {
                return (
                  <div className="matchcard-item" key={m.MatchId}>
                    <a href={m.MatchURL}>
                      <div className="playcard-col">
                        <div className="team-wrap">
                          <div className="team-logo">
                            <img
                              src={m.HomeTeamLogo}
                              alt={m.HomeTeamName}
                              width="37"
                              height="37"
                              onError={`${config.rootURL}images/official-logo-soon.jpg`}
                            />
                          </div>
                          <span className="team-title">{m.HomeTeamName}</span>
                        </div>
                      </div>
                      <div className="playcard-col">
                        <div className="active team-wrap team-score">
                          <div className="team-logo text-uppercase">
                            {m.MatchStatus === "NSY" ||
                            m.MatchStatus === "Result Only"
                              ? "vs"
                              : m.MatchScore}
                          </div>
                          <div className="team-title">
                            {m.MatchStatus === "NSY" ||
                            m.MatchStatus === "Result Only"
                              ? m.MatchTime
                              : m.CurrentMinute}
                          </div>
                        </div>
                      </div>
                      <div className="playcard-col">
                        <div className="team-wrap">
                          <div className="team-logo">
                            <img
                              src={m.AwayTeamLogo}
                              alt={m.AwayTeamName}
                              width="37"
                              height="37"
                              onError={onImageError}
                            />
                          </div>
                          <span className="team-title">{m.AwayTeamName}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SoccerMatch;
