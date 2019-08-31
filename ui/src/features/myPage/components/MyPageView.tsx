import React from 'react';
import { useActions } from 'typeless';
import { Dashboard } from 'src/components/Dashboard';
import { HoleModal } from './modalContents/HoleModal';
import { ModalActions } from '../../modal/interface';

export const MyPageView = () => {
  const { openModal } = useActions(ModalActions);

  return (
    <Dashboard>
      <h2>My Page</h2>
      <button className="button-default" onClick={openModal}>
        Show Modal
      </button>
      <HoleModal />
    </Dashboard>
  );
};
