
// Oggetti Generali Ottenuti

import type React from "react";

export type RefDice = React.RefObject<{ first: HTMLDivElement | null, second: HTMLElement | null }>;
export type TypesScores =  { id: number, first: number, second: number, total: number };
export type TypesDice = { first: HTMLDivElement | null, second: HTMLDivElement | null };
export type TextDiceThrowing = "Pronto al lancio?" | "Occhio al risultato…" | "";
export type MatchType = { player: HTMLDivElement | null, com: HTMLDivElement | null };
export type BonusTypes ={ id: number, bonus: { couple: number, triple: number, poker: number, fullrun: number }}
export type PointsTypes = { id?: number, player: number, com: number, bonus?: { couple: number, triple: number, poker: number, fullrun: number }, points?: { player: number, com: number, win?: string } };
export type MatchScoresType = { id: number, player: number, com: number, win: "Player" | "COM" | "Draw" | "" };

// Tipizzazione del Contesto

export interface ExportTypes { 
    RollDice: () => void,
    DiceTotalRef: { current: { first: HTMLDivElement | null, second: HTMLElement | null } },
    isActive: boolean,
    isTotal: number,
    isScores: React.RefObject<TypesScores[] | []>,
    isFirst: number,
    isSecond: number,
    ResetGameMode: () => void,
    isOpen: boolean,
    onClose: () => void,
    setOpen: (value: boolean) => void,
    RollDiceMatch: () => void,
    isPoints: React.RefObject<PointsTypes>,
    isScoresMatch: React.RefObject<MatchScoresType[] | []>,
    isStatics: React.RefObject<PointsTypes[] | []>,
    MatchRef: React.RefObject<MatchType>,
    isActiveMatch: boolean, 
    isPlayer: number, 
    isCOM: number, 
    isWin: string,
    setReset: (value: boolean) => void,
    isReset: boolean,
    ResetMatchMode: () => void,
    isBonus: React.RefObject<BonusTypes[]>,
    isAdv: boolean,
    setAdv: (value: boolean) => void
    isMod: boolean,
    setMod: (value: boolean) => void
};