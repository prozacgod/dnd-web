export type SheetInputProps<T> = {
  value?: T;
  onChange?: (value: T) => void;
  label?: string;
  width?: number;
};

export type CharacterClass =
  | undefined
  | null
  | "none"
  | "Assassin"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Illusionist"
  | "Magic User"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Thief";

export type AlignmentLawfullness =
  | undefined
  | null
  | "none"
  | "Lawful"
  | "Neutral"
  | "Chaotic";

export type AlignmentGoodness =
  | undefined
  | null
  | "none"
  | "Good"
  | "Neutral"
  | "Evil";

export type CharacterClassViewModel = {
  className?: string;
  level?: string;
  exp?: string;
};

export type RollToHitViewModel = {
  [-10]: string;
  [-9]: string;
  [-8]: string;
  [-7]: string;
  [-6]: string;
  [-5]: string;
  [-4]: string;
  [-3]: string;
  [-2]: string;
  [-1]: string;
  [0]: string;
  [1]: string;
  [2]: string;
  [3]: string;
  [4]: string;
  [5]: string;
  [6]: string;
  [7]: string;
  [8]: string;
  [9]: string;
  [10]: string;
};

export type AlignmentTypeViewModel = {
  lawfulness: string;
  goodness: string;
};

export type CharacterSheetViewModel = {
  name: string;
  race: string;
  classes: CharacterClassViewModel[];
  alignment: AlignmentTypeViewModel;
  hp: string;
  ac: string;
  age: string;
  height: string;
  weight: string;
  sex: string;
  attr: {
    str: {
      value: string;
      toHit: string;
      damage: string;
      encumbrance: string;
      minorTest: string;
      majorTest: string;
    };
    dex: {
      value: string;
      surprise: string;
      missileToHit: string;
      ac: string;
    };
    con: {
      value: string;
      hp: string;
      minorTest: string;
      majorTest: string;
    };
    int: {
      value: string;
      languages: string;
    };
    wis: {
      value: string;
      mentalSave: string;
    };
    cha: {
      value: string;
      henchmen: string;
      loyalty: string;
      reaction: string;
    };
  };
  savesVs: {
    aimedMagicItem: string;
    breathWeapon: string;
    deathParalysisPoison: string;
    petrifactionPolymorph: string;
    spells: string;
  };
  rollToHit?: RollToHitViewModel;
};
