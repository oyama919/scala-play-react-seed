import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'typeless';
import './modal.css';
import { ModalActions, Props, getModalState } from '../../modal/interface';
import Draggable from 'react-draggable';

export const Modal = (props: Props) => {
  const { closeModal } = useActions(ModalActions);
  const { isShowing } = getModalState.useState();

  const dom = isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <Draggable handle=".handle">
              <div
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className="modal">
                  <div className="modal-header handle">
                    <p className="modal-title">{props.title}</p>
                    <button
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={closeModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">{props.children}</div>
                </div>
              </div>
            </Draggable>
          </div>
        </>,
        document.body
      )
    : null;

  return dom;
};
export default Modal;
