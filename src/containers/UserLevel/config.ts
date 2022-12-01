type levels =
  | "SHARE Blue"
  | "SHARE Bronze"
  | "SHARE Sliver"
  | "SHARE Gold"
  | "SHARE Platinum";

type levelKey = "blue" | "bronze" | "sliver" | "gold" | "platinum";

export type levelType = {
  name: levels;
  key: levelKey;
  bonus: number;
  lowerLimit: number;
  upperLimit: number;
  extraBonus: number;
};

type userObjType = {
  currentLevel: levelKey;
  rides: number;
  totalMiles: string;
  co2Saved: string;
  currentScore: number;
};

export const allLevels: levelType[] = [
  {
    name: "SHARE Blue",
    key: "blue",
    bonus: 10,
    extraBonus: 5,
    lowerLimit: 0,
    upperLimit: 5,
  },
  {
    name: "SHARE Bronze",
    key: "bronze",
    bonus: 10,
    extraBonus: 5,
    lowerLimit: 6,
    upperLimit: 10,
  },
  {
    name: "SHARE Sliver",
    key: "sliver",
    bonus: 20,
    extraBonus: 5,
    lowerLimit: 11,
    upperLimit: 15,
  },
  {
    name: "SHARE Gold",
    key: "gold",
    bonus: 30,
    extraBonus: 5,
    lowerLimit: 15,
    upperLimit: 20,
  },
  {
    name: "SHARE Platinum",
    key: "platinum",
    bonus: 40,
    extraBonus: 5,
    lowerLimit: 21,
    upperLimit: 30,
  },
];

export const userObj: userObjType = {
  currentLevel: "bronze",
  rides: 1620,
  totalMiles: "22k mi",
  co2Saved: "10k lbs",
  currentScore: 6,
};
