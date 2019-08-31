import React from 'react';
import { useModule, TapState, TapActions } from './interface';
import { TapView } from './components/TapView';

const initialState: TapState = {
  counter: 1,
};

useModule.reducer(initialState).on(TapActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule();
  return <TapView />;
}
