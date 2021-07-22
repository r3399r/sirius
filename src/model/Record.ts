export type Player = {
  id: string;
  name: string;
  role?: string;
  alive?: boolean;
};

export type Night = {
  kill?: number;
  rescue: boolean;
  poison?: number;
  check?: number;
  guard?: number;
  hunterShoot: string;
  wolfKingShoot: string;
};
