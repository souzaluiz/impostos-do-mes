import { create } from 'zustand';

interface AmountStore {
  amount: number;
  updateAmount: (amount: number) => void;
  clearAmount: () => void;
}

export const useAmountStore = create<AmountStore>(set => ({
  amount: 0,
  updateAmount: amount => set(() => ({ amount })),
  clearAmount: () => set(() => ({ amount: 0 })),
}));
