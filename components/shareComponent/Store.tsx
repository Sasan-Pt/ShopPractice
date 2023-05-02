import { atom } from "jotai";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const objectsAtom = atom([]);
export const totalPrice = atom(0);

export const showAtom = atom<boolean>(false);
export const switchPassword = atom<boolean>(false);
export const todosAtom = atom<Todo[]>([]);
