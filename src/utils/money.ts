export const MAX_MONEY = Number.MAX_SAFE_INTEGER;

export const numberToMoneyFormat = (money: number): string => {
  return money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const extractNumber = (money: string): number => {
  return Number(money.replace(/[^0-9]/g, ''));
};
