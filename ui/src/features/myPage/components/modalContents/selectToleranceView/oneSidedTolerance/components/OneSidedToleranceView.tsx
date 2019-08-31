import React from 'react';
import { useActions } from 'typeless';
import {
  OneSidedToleranceActions,
  getOneSidedToleranceState,
} from '../interface';

export function OneSidedToleranceView() {
  const { double } = useActions(OneSidedToleranceActions);
  const { counter } = getOneSidedToleranceState.useState();

  return (
    <div>
      Module C. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
