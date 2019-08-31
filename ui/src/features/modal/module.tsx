import React from 'react';
import { useModule, ModalState, ModalActions, Props } from './interface';
import Modal from './components/Modal';

// --- Reducer ---
const initialState: ModalState = {
  isShowing: false,
};

useModule
  .reducer(initialState)
  .on(ModalActions.openModal, (state, { isShowing }) => {
    state.isShowing = isShowing;
  })
  .on(ModalActions.closeModal, (state, { isShowing }) => {
    state.isShowing = isShowing;
  });

// --- Module ---
export default (props: Props) => {
  useModule();
  return <Modal title={props.title} children={props.children} />;
};

// --- Module ---
export const useModalModule = () => useModule();
