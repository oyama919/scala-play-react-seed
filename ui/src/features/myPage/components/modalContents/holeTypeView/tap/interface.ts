import { createModule } from 'typeless';
import { TapSymbol } from './symbol';

export const [useModule, TapActions, getTapState] = createModule(TapSymbol)
  .withActions({
    double: null,
  })
  .withState<TapState>();

export interface TapState {
  counter: number;
}
