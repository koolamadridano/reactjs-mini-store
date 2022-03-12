import { atom, selector } from "recoil";

export const cartState = atom({
    key: 'cartState',
    default: [],
});

export const cartStateItems = selector({
    key: 'cartStateItems',
    get: ({get}) => {
      return  get(cartState);
    },
  });