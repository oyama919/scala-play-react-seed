import React from 'react';
import {
  useModule,
  OneSidedToleranceState,
  OneSidedToleranceActions,
} from './interface';
import { OneSidedToleranceView } from './components/OneSidedToleranceView';

const initialState: OneSidedToleranceState = {
  counter: 1,
};

useModule.reducer(initialState).on(OneSidedToleranceActions.double, state => {
  state.counter *= 2;
});

export default function CatModule() {
  useModule();
  return <OneSidedToleranceView />;
}
