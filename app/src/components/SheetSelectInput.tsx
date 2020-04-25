import * as React from "react";
import { HTMLSelect, FormGroup } from "@blueprintjs/core";
import { SheetInputProps } from "./SheetTypes";

import classes from "./CharacterSheet.module.css";

type SheetSelectProps = SheetInputProps<string> & {
  labels: string[];
  noneLabel: string;
};

export function SheetSelectInput(props: SheetSelectProps) {
  const onChange = props.onChange || (() => {});
  const label = props?.label || "";

  const value = props?.value || "none";

  return (
    <div className={classes.SheetInput}>
      <FormGroup className={classes.NoMargin} label={label} inline={true}>
        <HTMLSelect
          value={props.value}
          onChange={(evt) => onChange(evt.target.value)}
        >
          <option value={"none"}>{props?.noneLabel}</option>
          {props.labels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </HTMLSelect>
      </FormGroup>
    </div>
  );
}
