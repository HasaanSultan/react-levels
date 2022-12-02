type levels =
  | "SHARE Blue"
  | "SHARE Bronze"
  | "SHARE Sliver"
  | "SHARE Gold"
  | "SHARE Platinum";

export type levelKey = "blue" | "bronze" | "sliver" | "gold" | "platinum";

export type levelType = {
  name: levels;
  key: levelKey;
  extraBonus: number;
  bonus?: number;
};

export type userObjType = {
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
    extraBonus: 5,
  },
  {
    name: "SHARE Bronze",
    key: "bronze",
    bonus: 20,
    extraBonus: 5,
  },
  {
    name: "SHARE Sliver",
    key: "sliver",
    bonus: 30,
    extraBonus: 5,
  },
  {
    name: "SHARE Gold",
    key: "gold",
    bonus: 40,
    extraBonus: 5,
  },
  {
    name: "SHARE Platinum",
    key: "platinum",
    bonus: 50,
    extraBonus: 5,
  },
];

export const userObj: userObjType = {
  currentLevel: "bronze",
  rides: 1620,
  totalMiles: "22k mi",
  co2Saved: "10k lbs",
  currentScore: 6,
};
