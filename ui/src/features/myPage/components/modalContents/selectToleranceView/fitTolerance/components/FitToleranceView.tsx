import React from 'react';
import { useActions } from 'typeless';
import { FitToleranceActions, getFitToleranceState } from '../interface';

export function FitToleranceView() {
  const { decrease } = useActions(FitToleranceActions);
  const { counter } = getFitToleranceState.useState();

  return (
    <div>
      Module B. <br />
      Counter {counter} <br />
      <button onClick={decrease}>decrease</button> <br />
      <small>Counter will reset if you unmount this module.</small>
    </div>
  );
}
