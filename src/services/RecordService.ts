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
    { roleName: '預言家', roleCode: 'seer', nightAction: '預言家查驗', nightNull: '無查驗' },
    { roleName: '守衛', roleCode: 'guard', nightAction: '守衛守護', nightNull: '空守' },
    { roleName: '獵人', roleCode: 'hunter', nightAction: '獵人開槍', nightNull: '壓槍' },
    { roleName: '狼王', roleCode: 'wolf-king', nightAction: '狼王開槍', nightNull: '壓槍' },
    { roleName: '平民', roleCode: 'villager', nightAction: null, nightNull: null },
  ];
};
