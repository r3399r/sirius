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
  hunterShoot: any;
  wolfKingShoot: any;
};
