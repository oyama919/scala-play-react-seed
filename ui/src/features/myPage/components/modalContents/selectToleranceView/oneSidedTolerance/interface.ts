import { createModule } from 'typeless';
import { OneSidedToleranceSymbol } from './symbol';

export const [
  useModule,
  OneSidedToleranceActions,
  getOneSidedToleranceState,
] = createModule(OneSidedToleranceSymbol)
  .withActions({
    double: null,
  })
  .withState<OneSidedToleranceState>();

export interface OneSidedToleranceState {
  counter: number;
}
