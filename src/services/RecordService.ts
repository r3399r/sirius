export type Role = {
  roleName: string;
  roleCode: string;
  howMany: number;
  nightAction: string;
  nightNull: string;
};

export const getRoleStep = (type: string): Role[] => {
  // if (type === '某版型')
  return [
    { roleName: '女巫', roleCode: 'witch', howMany: 1, nightAction: '女巫', nightNull: '無行動' },
    {
      roleName: '預言家',
      roleCode: 'seer',
      howMany: 1,
      nightAction: '預言家查驗',
      nightNull: '無查驗',
    },
    { roleName: '守衛', roleCode: 'guard', howMany: 1, nightAction: '守衛守護', nightNull: '空守' },
    {
      roleName: '獵人',
      roleCode: 'hunter',
      howMany: 1,
      nightAction: '獵人開槍',
      nightNull: '壓槍',
    },
    {
      roleName: '狼王',
      roleCode: 'wolf-king',
      howMany: 1,
      nightAction: '狼王開槍',
      nightNull: '壓槍',
    },
    { roleName: '狼', roleCode: 'wolf', howMany: 3, nightAction: '狼刀', nightNull: '空刀' },
    { roleName: '平民', roleCode: 'villager', howMany: 4, nightAction: '', nightNull: '' },
  ];
  // throw new Error('unexpected game type')
};
