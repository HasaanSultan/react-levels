import React, { useState } from "react";
import UserLevelWrapper, {
  LevelWrapper,
  CurrentLevelWrapper,
  FlexCol,
  LevelName,
} from "./userLevel.styles";
import { userObj, allLevels, levelType, levelKey, userObjType } from "./config";
import ProgressBar from "../../components/ProgressBar/index";

const UserLevel: React.FC = () => {
  const [user, setUser] = useState(userObj);

  const renderBonus = (level: levelType) => (
    <>{level?.bonus && <p>${level?.bonus}</p>}</>
  );
  const renderLevelName = (level: levelType) => (
    <LevelName className={level.key}>{level?.name}</LevelName>
  );

  const handleClickLevel = (key: levelKey) => {
    const selectedLevel = allLevels.filter((x) => x.key === key)[0];
    setUser((prevState: userObjType) => ({
      ...prevState,
      currentLevel: selectedLevel.key,
    }));
  };

  return (
    <UserLevelWrapper>
      {allLevels.map((level: levelType) => {
        const isActive = user.currentLevel === level.key;
        return (
          <LevelWrapper
            className={`${level.key} ${!isActive ? "disabled" : ""}`}
            onClick={() => handleClickLevel(level.key)}
          >
            {isActive ? (
              <CurrentLevelWrapper>
                <div className="flex">
                  <FlexCol>
                    <p className="heading">This Month</p>
                    <p className="">Extra Bonus ${level.extraBonus}</p>
                  </FlexCol>
                  <FlexCol>
                    <p className="">LifeTIme</p>
                    <p className="">Stats</p>
                  </FlexCol>
                  <FlexCol>
                    <p className="">Rides</p>
                    <p className="">{user.rides}</p>
                  </FlexCol>
                  <FlexCol>
                    <p className="">Total Miles</p>
                    <p className="">{user.totalMiles}</p>
                  </FlexCol>
                  <FlexCol>
                    <p className="">Co2 Saved</p>
                    <p className="">{user.co2Saved}</p>
                  </FlexCol>
                </div>
                <div className="flex">
                  <ProgressBar
                    gapPosition={"top"}
                    gapDegree={10}
                    className={level.key}
                    strokeWidth={1}
                    percent={user.currentScore * 10}
                    steps={10}
                    trailWidth={50}
                    strokeColor="#795a15"
                  />
                  <>
                    {renderLevelName(level)}
                    {renderBonus(level)}
                  </>
                </div>
              </CurrentLevelWrapper>
            ) : (
              <div className="flex">
                <ProgressBar
                  style={{ width: "80%" }}
                  trailWidth={10}
                  className={level.key}
                  disabled={true}
                  strokeColor="none"
                />
                <>
                  {renderLevelName(level)}
                  {renderBonus(level)}
                </>
              </div>
            )}
          </LevelWrapper>
        );
      })}
    </UserLevelWrapper>
  );
};

export default UserLevel;
