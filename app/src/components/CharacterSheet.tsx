import * as React from "react";

import classes from "./CharacterSheet.module.css";
import classnames from "classnames";
import { useDocument } from "@adamite/react";
import adamite from "@adamite/sdk";
import { Button, InputGroup, FormGroup, Label } from "@blueprintjs/core";
import {
  CharacterSheetViewModel,
  AlignmentTypeViewModel,
  CharacterClassViewModel,
} from "./SheetTypes";
import { loadCharacterSheetViewModel, updateSheet } from "./SheetUtils";
import { SheetTextInput } from "./SheetTextInput";
import { SheetAlignmentInput } from "./SheetAlignmentInput";
import { SheetClassesInput } from "./SheetClassesInput";
import { SheetSelectInput } from "./SheetSelectInput";

type CharacterSheetProps = {
  sheetId: string;
};

export function CharacterSheet(props: CharacterSheetProps) {
  const [sheetDocument, loading] = useDocument(
    adamite().database().collection("sheets").doc(props.sheetId)
  );

  let characterSheet: CharacterSheetViewModel | undefined = undefined;

  if (sheetDocument && sheetDocument.data) {
    characterSheet = loadCharacterSheetViewModel(sheetDocument.data);
  }

  function changeSheet<T>(key: string) {
    return (value: any) => updateSheet(props.sheetId, { [key]: value });
  }

  const changeSheetAlignment = changeSheet<AlignmentTypeViewModel>("alignment");

  const changeSheetClasses = changeSheet<CharacterClassViewModel[]>("classes");

  const changeSheetString = (key: string) => changeSheet<string>(key);

  const totalExp = characterSheet?.classes.reduce(
    (a, c) => a + (parseInt(c?.exp || "") || 0),
    0
  );

  return (
    <>
      <div className={classes.CharacterSheet}>
        {loading && (
          <div>
            Loading Sheet...
            <Button
              onClick={() => {
                updateSheet(props.sheetId, {});
              }}
            >
              Create {props.sheetId}
            </Button>
          </div>
        )}
        {characterSheet && (
          <div
            className={classnames(
              classes.PersonalAttributes,
              classes.SheetColumn
            )}
          >
            <div className={classnames(classes.SheetRow, classes.SpaceBetween)}>
              <SheetTextInput
                label={"Character Name"}
                value={characterSheet.name}
                onChange={changeSheetString("name")}
              />
              <SheetAlignmentInput
                label="Alignment"
                value={characterSheet.alignment}
                onChange={changeSheetAlignment}
              />
            </div>
            <div className={classnames(classes.SheetRow, classes.SpaceBetween)}>
              <SheetTextInput
                label={"Race"}
                value={characterSheet.race}
                onChange={changeSheetString("race")}
              />
              <SheetTextInput
                label={"AC"}
                value={characterSheet.ac}
                onChange={changeSheetString("ac")}
                width={100}
              />
              <SheetTextInput
                label={"HP"}
                value={characterSheet.hp}
                onChange={changeSheetString("hp")}
                width={100}
              />
              <SheetTextInput
                label="Age"
                value={characterSheet.age}
                onChange={changeSheetString("age")}
                width={100}
              />
              <SheetTextInput
                label="Height"
                value={characterSheet.height}
                onChange={changeSheetString("height")}
                width={100}
              />
              <SheetTextInput
                label="Weight"
                value={characterSheet.weight}
                onChange={changeSheetString("weight")}
                width={100}
              />
              <SheetSelectInput
                labels={["Male", "Female"]}
                noneLabel={"..."}
                label="Sex"
                value={characterSheet.sex}
                onChange={changeSheetString("sex")}
                width={100}
              />
            </div>
            <div className={classnames(classes.SheetRow)}>
              <div
                className={classnames(classes.SheetColumn)}
                style={{ width: "50%" }}
              >
                <SheetClassesInput
                  label="Class(es)"
                  value={characterSheet.classes}
                  onChange={changeSheetClasses}
                />
              </div>
              <div
                className={classnames(classes.SheetColumn)}
                style={{ width: "50%" }}
              >
                <table>
                  <tr>
                    <td>XP: {totalExp}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <pre>{JSON.stringify(sheetDocument?.data, null, 2)}</pre>
    </>
  );
}
