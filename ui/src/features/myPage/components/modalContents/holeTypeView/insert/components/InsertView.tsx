import React from 'react';
import { useActions } from 'typeless';
import { InsertActions, getInsertState } from '../interface';

export function InsertView() {
  const { double } = useActions(InsertActions);
  const { counter } = getInsertState.useState();

  return (
    <div>
      Module Two. <br />
      Counter {counter} <br />
      <button onClick={double}>double</button>
    </div>
  );
}
