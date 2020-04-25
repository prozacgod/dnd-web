import * as React from "react";
import { SheetInputProps, CharacterClassViewModel } from "./SheetTypes";
import { FormGroup, Label, Popover, HTMLSelect } from "@blueprintjs/core";

import classes from "./CharacterSheet.module.css";
import { SheetTextInput } from "./SheetTextInput";
import { SheetSelectInput } from "./SheetSelectInput";

function SheetClassEditor(props: SheetInputProps<CharacterClassViewModel>) {
  const onChangeClass = (key: string, newValue: any) => {
    if (props.value && props.onChange) {
      const { className, exp, level } = props.value;
      props.onChange({
        ...{
          className,
          exp,
          level,
        },
        [key]: newValue,
      } as any);
    }
  };

  console.log(props.value);

  return (
    <div className={classes.SheetRow}>
      <SheetSelectInput
        label="Class"
        value={props.value?.className}
        onChange={(value: string) => onChangeClass("className", value)}
        noneLabel="..."
        labels={[
          "Assassin",
          "Cleric",
          "Druid",
          "Fighter",
          "Illusionist",
          "Magic User",
          "Monk",
          "Paladin",
          "Ranger",
          "Thief",
        ]}
      />
      <SheetTextInput
        label="Level"
        width={100}
        value={props.value?.level}
        onChange={(value) => onChangeClass("level", value)}
      />
      <SheetTextInput
        label="Xp"
        width={100}
        value={props.value?.exp}
        onChange={(value) => onChangeClass("exp", value)}
      />
    </div>
  );
}

export function SheetClassesInput(
  props: SheetInputProps<CharacterClassViewModel[]>
) {
  if (!props.value) {
    return <div className={classes.SheetClassEditors}></div>;
  }

  return (
    <div className={classes.SheetInput}>
      <div className={classes.SheetClassEditors}>
        {props.value.map((c, classIndex) => (
          <SheetClassEditor
            key={classIndex}
            value={c}
            onChange={(c) => {
              if (props.value && props.onChange) {
                const classes = props.value.map((oldc, i) =>
                  i === classIndex ? c : oldc
                );
                props.onChange(classes);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
