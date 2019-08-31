import { createModule } from 'typeless';
import { TwoSidedToleranceSymbol } from './symbol';

export const [
  useModule,
  TwoSidedToleranceActions,
  getTwoSidedToleranceState,
] = createModule(TwoSidedToleranceSymbol)
  .withActions({
    double: null,
  })
  .withState<TwoSidedToleranceState>();

export interface TwoSidedToleranceState {
  counter: number;
}
