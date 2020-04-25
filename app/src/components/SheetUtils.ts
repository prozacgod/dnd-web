import { CharacterSheetViewModel } from "./SheetTypes";
import adamite from "@adamite/sdk";

export function updateSheet(id: string, value: any) {
  console.log("Updating sheet", { id, value });
  adamite().database().collection("sheets").doc(id).update(value);
}

// export function getGoodness(g: string | undefined | null): AlignmentGoodness {
//   if (g === "Good" || g === "Neutral" || g === "Evil" || g === null) {
//     return g;
//   }
//   return null;
// }

// export function getLawfullness(l: string): AlignmentLawfullness {
//   return (l || "") as AlignmentLawfullness;
// }

// export function getClassName(className: string): CharacterClasses {
//   if (className === "none") {
//     return undefined;
//   }
//   return className as CharacterClasses;
// }

// export function getClasses(classes: any): CharacterClass[] {
//   if (!classes) return [];

//   return classes as CharacterClass[];
// }

export function createEmptyCharacterSheetViewModel(): CharacterSheetViewModel {
  return {
    name: "",
    ac: "",
    age: "",
    height: "",
    hp: "",
    race: "",
    sex: "",
    weight: "",
    alignment: {
      goodness: "",
      lawfulness: "",
    },
    attr: {
      cha: { henchmen: "", loyalty: "", reaction: "", value: "" },
      con: { hp: "", majorTest: "", minorTest: "", value: "" },
      dex: { ac: "", missileToHit: "", surprise: "", value: "" },
      int: { languages: "", value: "" },
      str: {
        damage: "",
        encumbrance: "",
        majorTest: "",
        minorTest: "",
        toHit: "",
        value: "",
      },
      wis: {
        mentalSave: "",
        value: "",
      },
    },
    classes: [
      { className: "", exp: "", level: "" },
      { className: "", exp: "", level: "" },
      { className: "", exp: "", level: "" },
    ],
    rollToHit: {
      "-10": "",
      "-9": "",
      "-8": "",
      "-7": "",
      "-6": "",
      "-5": "",
      "-4": "",
      "-3": "",
      "-2": "",
      "-1": "",
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
    },
    savesVs: {
      aimedMagicItem: "",
      breathWeapon: "",
      deathParalysisPoison: "",
      petrifactionPolymorph: "",
      spells: "",
    },
  };
}

export function loadCharacterSheetViewModel(
  data: any
): CharacterSheetViewModel {
  const sheet = createEmptyCharacterSheetViewModel();

  const gsv = (value: any): string => {
    if (typeof value === "string") return value;
    return "";
  };

  sheet.name = gsv(data?.name);
  sheet.race = gsv(data?.race);
  sheet.age = gsv(data?.age);
  sheet.sex = gsv(data?.sex);
  sheet.weight = gsv(data?.weight);
  sheet.ac = gsv(data?.ac);
  sheet.hp = gsv(data?.hp);
  sheet.height = gsv(data?.height);

  sheet.alignment.goodness = gsv(data?.alignment?.goodness);
  sheet.alignment.lawfulness = gsv(data?.alignment?.lawfulness);

  sheet.attr.cha.henchmen = gsv(data?.attr?.cha?.henchmen);
  sheet.attr.cha.loyalty = gsv(data?.attr?.cha?.loyalty);
  sheet.attr.cha.reaction = gsv(data?.attr?.cha?.reaction);
  sheet.attr.cha.value = gsv(data?.attr?.cha?.value);

  sheet.attr.con.value = gsv(data?.attr?.con?.value);
  sheet.attr.con.hp = gsv(data?.attr?.con?.hp);
  sheet.attr.con.minorTest = gsv(data?.attr?.con?.minorTest);
  sheet.attr.con.majorTest = gsv(data?.attr?.con?.majorTest);

  sheet.attr.dex.ac = gsv(data?.attr?.dex?.ac);
  sheet.attr.dex.missileToHit = gsv(data?.attr?.dex?.missileToHit);
  sheet.attr.dex.surprise = gsv(data?.attr?.dex?.surprise);
  sheet.attr.dex.value = gsv(data?.attr?.dex?.value);

  sheet.attr.int.languages = gsv(data?.attr?.int?.languages);
  sheet.attr.int.value = gsv(data?.attr?.int?.value);

  sheet.attr.str.value = gsv(data?.attr?.str?.value);
  sheet.attr.str.damage = gsv(data?.attr?.str?.damage);
  sheet.attr.str.encumbrance = gsv(data?.attr?.str?.encumbrance);
  sheet.attr.str.minorTest = gsv(data?.attr?.str?.minorTest);
  sheet.attr.str.majorTest = gsv(data?.attr?.str?.majorTest);
  sheet.attr.str.toHit = gsv(data?.attr?.str?.toHit);

  sheet.attr.wis.mentalSave = gsv(data?.attr?.wis?.mentalSave);
  sheet.attr.wis.value = gsv(data?.attr?.wis?.value);

  sheet.savesVs.aimedMagicItem = gsv(data?.savesVs?.aimedMagicItem);
  sheet.savesVs.breathWeapon = gsv(data?.savesVs?.breathWeapon);
  sheet.savesVs.deathParalysisPoison = gsv(data?.savesVs?.deathParalysisPoison);
  sheet.savesVs.petrifactionPolymorph = gsv(
    data?.savesVs?.petrifactionPolymorph
  );
  sheet.savesVs.spells = gsv(data?.savesVs?.spells);

  const class0 = data?.classes[0];
  const class1 = data?.classes[1];
  const class2 = data?.classes[2];

  sheet.classes = [
    {
      className: gsv(class0?.className),
      exp: gsv(class0?.exp),
      level: gsv(class0?.level),
    },
    {
      className: gsv(class1?.className),
      exp: gsv(class1?.exp),
      level: gsv(class1?.level),
    },
    {
      className: gsv(class2?.className),
      exp: gsv(class2?.exp),
      level: gsv(class2?.level),
    },
  ];

  return sheet;
}
