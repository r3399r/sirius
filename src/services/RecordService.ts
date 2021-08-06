import { Player } from 'src/model/Record';

export type RoleDataType = {
  roleName: string;
  roleCode: string;
  howMany: number;
};

export type NightDataType = {
  roleName: string;
  roleCode: string;
  nightAction: string | null;
  nightNull: string | null;
};

export const getRoleData = (type: string): RoleDataType[] => {
  // if (type === '某版型')
  return [
    { roleName: '女巫', roleCode: 'witch', howMany: 1 },
    { roleName: '預言家', roleCode: 'seer', howMany: 1 },
    { roleName: '守衛', roleCode: 'guard', howMany: 1 },
    { roleName: '獵人', roleCode: 'hunter', howMany: 1 },
    { roleName: '狼王', roleCode: 'wolf-king', howMany: 1 },
    { roleName: '狼', roleCode: 'wolf', howMany: 3 },
    { roleName: '平民', roleCode: 'villager', howMany: 4 },
  ];
  // throw new Error('unexpected game type')
};

export const getNightData = (type: string): NightDataType[] => {
  // if (type === '某版型')
  return [
    { roleName: '狼', roleCode: 'wolf', nightAction: '狼刀', nightNull: '空刀' },
    { roleName: '女巫', roleCode: 'witch', nightAction: '女巫', nightNull: '無行動' },
    {
      roleName: '預言家',
      roleCode: 'seer',
      nightAction: '預言家查驗',
      nightNull: '無查驗',
    },
    { roleName: '守衛', roleCode: 'guard', nightAction: '守衛守護', nightNull: '空守' },
    { roleName: '獵人', roleCode: 'hunter', nightAction: '獵人開槍', nightNull: '壓槍' },
    {
      roleName: '狼王',
      roleCode: 'wolf-king',
      nightAction: '狼王開槍',
      nightNull: '壓槍',
    },
    { roleName: '平民', roleCode: 'villager', nightAction: null, nightNull: null },
  ];
};

export const wolfDisabledJudge = (id: string, kill: number) => {
  if (kill >= 0)
    if (Number(id) === kill) return false;
    else return true;
  else return false;
};
export const witchDisabledJudge = (
  id: string,
  rescue: boolean,
  poison: number,
  kill: number,
  player: Player[],
) => {
  if (player.find((x: Player) => x.id === id)?.role === 'witch') return true;
  else if (Number(id) === 0)
    if (rescue === false && poison <= 0) return false;
    else return true;
  else if (rescue === true)
    if (Number(id) === kill) return false;
    else return true;
  else if (poison === 13) return false;
  // 確認開毒
  else if (poison > 0)
    if (Number(id) === poison) return false;
    // 僅有被毒者為可按下
    else return true;
  else if (poison === 0) return true;
  // 無行動
  else return true;
};
export const seerDisabledJudge = (id: string, check: number, player: Player[]) => {
  if (player.find((x: Player) => x.id === id)?.role === 'seer') return true;
  else if (check >= 0)
    if (Number(id) === check) return false;
    else return true;
  else return false;
};
export const guardDisabledJudge = (id: string, guard: number) => {
  if (guard >= 0)
    if (Number(id) === guard) return false;
    else return true;
  else return false;
};
export const hunterDisabledJudge = (id: string, hunterShoot: number, player: Player[]) => {
  if (player.find((x: Player) => x.id === id)?.role === 'hunter') return true;
  else if (hunterShoot >= 0)
    if (Number(id) === hunterShoot) return false;
    else return true;
  else return false;
};
export const wolfKingDisabledJudge = (id: string, wolfKingShoot: number, player: Player[]) => {
  if (player.find((x: Player) => x.id === id)?.role === 'wolf-king') return true;
  else if (wolfKingShoot >= 0)
    if (Number(id) === wolfKingShoot) return false;
    else return true;
  else return false;
};
