"use client"

import { atom } from "recoil";

interface ItemInfo {
    id: number;
    title: string;
    body: string;
}

export const ItemAtom = atom<ItemInfo>({
    key: 'item',
    default: {
        id: 0,
        title: '',
        body: ''
    }
})