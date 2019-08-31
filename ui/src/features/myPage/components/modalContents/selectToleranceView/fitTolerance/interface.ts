import { createModule } from 'typeless';
import { FitToleranceSymbol } from './symbol';

export const [
  useModule,
  FitToleranceActions,
  getFitToleranceState,
] = createModule(FitToleranceSymbol)
  .withActions({
    decrease: null,
    $unmounting: null,
  })
  .withState<FitToleranceState>();

export interface FitToleranceState {
  counter: number;
}
