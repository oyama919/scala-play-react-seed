import React from 'react';
import { useModule, InsertState, InsertActions } from './interface';
import { InsertView } from './components/InsertView';

const initialState: InsertState = {
  counter: 1,
};

useModule.reducer(initialState).on(InsertActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule();
  return <InsertView />;
}
