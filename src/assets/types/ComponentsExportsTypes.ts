
// Oggetti Generali Ottenuti

export type RefDice = React.RefObject<{ first: HTMLDivElement | null, second: HTMLElement | null }>;
export type TypesScores =  { id: number, first: number, second: number, total: number };
export type TypesDice = { first: HTMLDivElement | null, second: HTMLDivElement | null };
export type TextDiceThrowing = "Pronto al lancio?" | "Occhio al risultato…" | "";

// Tipizzazione del Contesto

export interface ExportTypes { 
    RollDice: () => void,
    DiceTotalRef: { current: { first: HTMLDivElement | null, second: HTMLElement | null } },
    isActive: boolean,
    isTotal: number,
    isScores: React.RefObject<TypesScores[] | []>,
    isFirst: number,
    isSecond: number,
    ResetGameMode: () => void
};