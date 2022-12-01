import React from "react";
import UserLevelWrapper, {
  LevelWrapper,
  CurrentLevelWrapper,
} from "./userLevel.styles";
import { userObj, allLevels, levelType } from "./config";
import ProgressBar from "../../components/ProgressBar/index";

const UserLevel: React.FC = () => {
  return (
    <UserLevelWrapper>
      {allLevels.map((level: levelType) => {
        const isActive = userObj.currentLevel === level.key;
        return (
          <LevelWrapper className={level.key}>
            {isActive ? (
              <CurrentLevelWrapper>
                <p className="heading">This Month</p>
                <ProgressBar
                  gapPosition={"top"}
                  gapDegree={10}
                  className={level.key}
                  strokeWidth={1}
                  percent={userObj.currentScore * 10}
                  steps={10}
                />
              </CurrentLevelWrapper>
            ) : (
              <ProgressBar className={level.key} />
            )}
          </LevelWrapper>
        );
      })}
    </UserLevelWrapper>
  );
};

export default UserLevel;
