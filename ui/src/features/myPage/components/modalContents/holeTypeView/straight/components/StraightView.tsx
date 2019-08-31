import React from 'react';
import { useActions } from 'typeless';
import { StraightActions, getStraightState } from '../interface';

export function StraightView() {
  const { decrease } = useActions(StraightActions);
  const { counter } = getStraightState.useState();

  return (
    <div>
      Module B. <br />
      Counter {counter} <br />
      <button onClick={decrease}>decrease</button> <br />
      <small>Counter will reset if you unmount this module.</small>
    </div>
  );
}
