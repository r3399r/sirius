export type Role = {
  roleName: string;
  roleCode: string;
  howMany: number;
};

export const getRoleStep = (type: string): Role[] => {
  // if (type === '某版型')
  return [
    { roleName: '女巫', roleCode: 'witch', howMany: 1 }, // 一位
    { roleName: '預言家', roleCode: 'seer', howMany: 1 },
    { roleName: '守衛', roleCode: 'guard', howMany: 1 },
    { roleName: '獵人', roleCode: 'hunter', howMany: 1 },
    { roleName: '狼王', roleCode: 'wolf-king', howMany: 1 },
    { roleName: '狼', roleCode: 'wolf', howMany: 3 }, // 多位
    { roleName: '平民', roleCode: 'villager', howMany: 4 },
  ];
  // throw new Error('unexpected game type')
};
