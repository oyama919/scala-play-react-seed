import React from 'react';
import { useActions } from 'typeless';
import {
  TwoSidedToleranceActions,
  getTwoSidedToleranceState,
} from '../interface';

export function TwoSidedToleranceView() {
  const { double } = useActions(TwoSidedToleranceActions);
  const { counter } = getTwoSidedToleranceState.useState();

  return (
    <div>
      Module Two. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
