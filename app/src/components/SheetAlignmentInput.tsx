import * as React from "react";
import { SheetInputProps, AlignmentTypeViewModel } from "./SheetTypes";
import { FormGroup, HTMLSelect } from "@blueprintjs/core";

import classes from "./CharacterSheet.module.css";

export function SheetAlignmentInput(
  props: SheetInputProps<AlignmentTypeViewModel>
) {
  function onChangeLawfulness(value: string) {
    if (props.onChange && props.value) {
      props.onChange({
        goodness: props.value.goodness,
        lawfulness: value,
      });
    }
  }

  function onChangeGoodness(value: string) {
    if (props.onChange && props.value) {
      props.onChange({
        goodness: value,
        lawfulness: props.value.lawfulness,
      });
    }
  }

  return (
    <div className={classes.SheetInput}>
      <FormGroup className={classes.NoMargin} label={"Alignment"} inline={true}>
        <HTMLSelect
          value={props.value?.lawfulness}
          onChange={(evt) => onChangeLawfulness(evt.target.value)}
        >
          <option>Choose lawfulness...</option>
          <option>Lawful</option>
          <option>Neutral</option>
          <option>Chaotic</option>
        </HTMLSelect>
        <HTMLSelect
          value={props.value?.goodness}
          onChange={(evt) => onChangeGoodness(evt.target.value)}
        >
          <option>Choose goodness...</option>
          <option>Good</option>
          <option>Neutral</option>
          <option>Evil</option>
        </HTMLSelect>
      </FormGroup>
    </div>
  );
}
