import * as React from "react";
import { SheetInputProps } from "./SheetTypes";
import classes from "./CharacterSheet.module.css";
import { FormGroup, InputGroup } from "@blueprintjs/core";

export function SheetTextInput(props: SheetInputProps<string>) {
  const value = props.value || "";
  const onChange = props.onChange || (() => {});
  const label = props.label || "No Label";
  let style: React.CSSProperties = {};
  if (props.width) {
    style.width = props.width;
  }
  return (
    <div className={classes.SheetInput} style={style}>
      <FormGroup className={classes.NoMargin} label={label} inline={true}>
        <InputGroup
          value={value}
          onChange={(evt: any) => onChange(evt?.target.value)}
        />
      </FormGroup>
    </div>
  );
}
