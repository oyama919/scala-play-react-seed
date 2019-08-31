import React from 'react';
import { useModule, MyPageState, MyPageActions } from './interface';
import { MyPageView } from './components/MyPageView';

// --- Reducer ---
const initialState: MyPageState = {
  selectToleranceViewType: null,
  holeTypeViewType: null,
};

useModule
  .reducer(initialState)
  .on(MyPageActions.showToleranceSelectView, (state, { viewType }) => {
    state.selectToleranceViewType = viewType;
  })
  .on(MyPageActions.showHoleSelectView, (state, { viewType }) => {
    state.holeTypeViewType = viewType;
  });

// --- Module ---
export default () => {
  useModule();
  return <MyPageView />;
};
