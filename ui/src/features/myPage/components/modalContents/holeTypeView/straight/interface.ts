import { createModule } from 'typeless';
import { StraightSymbol } from './symbol';

export const MODULE = 'straight';

export const [useModule, StraightActions, getStraightState] = createModule(
  StraightSymbol
)
  .withActions({
    decrease: null,
    $unmounting: null,
  })
  .withState<StraightState>();

export interface StraightState {
  counter: number;
}
