import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createModule } from 'typeless';
import { MyPageSymbol } from './symbol';

// --- Actions ---
export const [useModule, MyPageActions, getMyPageState] = createModule(
  MyPageSymbol
)
  .withActions({
    showToleranceSelectView: (viewType: SelectToleranceViewType) => ({
      payload: { viewType },
    }),
    showHoleSelectView: (viewType: HoleTypeViewType) => ({
      payload: { viewType },
    }),
  })
  .withState<MyPageState>();

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'));

const MyPageRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
);

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/mypage',
  component: <MyPageRoute />,
};

// --- Types ---
export interface MyPageState {
  selectToleranceViewType: SelectToleranceViewType | null;
  holeTypeViewType: HoleTypeViewType | null;
}

export type SelectToleranceViewType =
  | 'noTolerance'
  | 'fitTolerance'
  | 'oneSidedTolerance'
  | 'twoSidedTolerance';

export type HoleTypeViewType = 'insert' | 'straight' | 'tap';
