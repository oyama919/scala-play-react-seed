import { createModule } from 'typeless';
import { ModalSymbol } from './symbol';

// --- Constants ---
export const MODULE = 'modal';

// --- Actions ---
export const [useModule, ModalActions, getModalState] = createModule(
  ModalSymbol
)
  .withActions({
    loadCat: null,
    cancel: null,
    openModal: () => ({ payload: { isShowing: true } }),
    closeModal: () => ({ payload: { isShowing: false } }),
  })
  .withState<ModalState>();

// --- Types ---
export interface ModalState {
  isShowing: Boolean;
}

export type Props = {
  title: String;
  children: any;
};
