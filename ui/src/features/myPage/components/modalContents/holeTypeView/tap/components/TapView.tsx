import React from 'react';
import { useActions } from 'typeless';
import { TapActions, getTapState } from '../interface';

export function TapView() {
  const { double } = useActions(TapActions);
  const { counter } = getTapState.useState();

  return (
    <div>
      Module C. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
