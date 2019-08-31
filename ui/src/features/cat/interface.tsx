import React from 'react';
import { DefaultSuspense } from 'src/components/DefaultSuspense';
import { RouteConfig } from 'src/types';
import { createModule } from 'typeless';
import { CatSymbol } from './symbol';

// --- Actions ---
export const [handle, CatActions, getCatState] = createModule(CatSymbol)
  .withActions({
    loadCat: null,
    cancel: null,
    catLoaded: (cat: Cat) => ({ payload: { cat } }),
    errorOcurred: (error: string) => ({ payload: { error } }),
  })
  .withState<CatState>();

// --- Routing ---
const ModuleLoader = React.lazy(() => import('./module'));

const CatRoute = () => (
  <DefaultSuspense>
    <ModuleLoader />
  </DefaultSuspense>
);

export const routeConfig: RouteConfig = {
  type: 'route',
  auth: true,
  path: '/cat',
  component: <CatRoute />,
};

// --- Types ---
export interface CounterState {
  isLoading: boolean;
  count: number;
}

type ViewType = 'loading' | 'details' | 'error';

interface Cat {
  imageUrl: string;
}

export interface CatState {
  viewType: ViewType;
  cat: Cat | null;
  error: string;
}
