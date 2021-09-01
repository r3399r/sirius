export type Player = {
  id: string;
  name: string;
  role?: string;
  alive?: boolean;
};

export type Night = {
  id: string;
  kill?: number;
  rescue: boolean;
  poison?: number;
  check?: number;
  guard?: number;
  hunterShoot: number;
  wolfKingShoot: number;
};

export type DaytimeDeath = {
  id: string;
  status: string;
};

export type Sheriff = {
  runFor: number[];
  withdraw: number[];
  firstVote: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
  };
  secondVote: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
  };
  sheriff: number;
};
