import React from 'react';
import { useModule, StraightState, StraightActions } from './interface';
import { StraightView } from './components/StraightView';

const initialState: StraightState = {
  counter: 0,
};

useModule
  .reducer(initialState)
  .on(StraightActions.decrease, state => {
    state.counter--;
  })
  .on(StraightActions.$unmounting, state => {
    state.counter = 0;
  });

export default function CatModule() {
  useModule();
  return <StraightView />;
}
