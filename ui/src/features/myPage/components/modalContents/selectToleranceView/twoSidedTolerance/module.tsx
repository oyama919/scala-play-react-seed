import React from 'react';
import {
  useModule,
  TwoSidedToleranceState,
  TwoSidedToleranceActions,
} from './interface';
import { TwoSidedToleranceView } from './components/TwoSidedToleranceView';

const initialState: TwoSidedToleranceState = {
  counter: 1,
};

useModule.reducer(initialState).on(TwoSidedToleranceActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule();
  return <TwoSidedToleranceView />;
}
