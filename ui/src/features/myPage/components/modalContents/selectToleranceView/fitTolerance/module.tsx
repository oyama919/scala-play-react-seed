import React from 'react';
import { useModule, FitToleranceState, FitToleranceActions } from './interface';
import { FitToleranceView } from './components/FitToleranceView';

const initialState: FitToleranceState = {
  counter: 0,
};

useModule
  .reducer(initialState)
  .on(FitToleranceActions.decrease, state => {
    state.counter--;
  })
  .on(FitToleranceActions.$unmounting, state => {
    state.counter = 0;
  });

export default function CatModule() {
  useModule();
  return <FitToleranceView />;
}
