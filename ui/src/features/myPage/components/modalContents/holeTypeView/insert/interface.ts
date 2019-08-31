import { createModule } from 'typeless';
import { InsertSymbol } from './symbol';

export const [useModule, InsertActions, getInsertState] = createModule(
  InsertSymbol
)
  .withActions({
    double: null,
  })
  .withState<InsertState>();

export interface InsertState {
  counter: number;
}
