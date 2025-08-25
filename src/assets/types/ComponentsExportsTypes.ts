
// Oggetti Generali Ottenuti

export type RefDice = React.RefObject<{ first: HTMLDivElement | null, second: HTMLElement | null }>;
export type TypesScores =  { id: number, first: number, second: number, total: number };
export type TypesDice = { first: HTMLDivElement | null, second: HTMLDivElement | null };
export type TextDiceThrowing = "Pronto al lancio?" | "Occhio al risultato…" | "";
export type MathType = { player: HTMLDivElement | null, com: HTMLDivElement | null };
export type PointsTypes = { id?: number, player: number, com: number, bonus: { couple: number, triple: number, poker: number, fullrun: number } };
export type MathScoresType = { id: number, player: number, com: number, win: "Player" | "COM" | "Draw" | "" };

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
    RollDiceMatch: () => void
};