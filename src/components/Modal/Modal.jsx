import React, { useState } from "react";

import '../../styles/modal/modal.scss';

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

/* 
  Uses .modal-button className for the opener, .modal-content for the container, .modal-close for close button and .modal-body for the body of the modal. 
  Also, the wrapper of the modal uses .modal, but you can replace it as you want using the prop modalClassName.
  .modal-overlay is the background color when opening a modal.
*/

const Modal = ({ children, modalClassName, buttonModal }) => {

  const toggleClassName = modalClassName || "modal";

  return (
  <ToggleContent
      toggle={show => <div onClick={show} className="modal-button" onKeyDown={show} role="button" aria-label="Open" tabIndex={0}>{buttonModal}</div>}
      content={hide => (
        <div className={toggleClassName}>
          <div className="modal-overlay" onClick={hide} onKeyDown={hide} role="button" aria-label="Open" tabIndex={0} />
          <div className="modal-content">
            <button className="modal-close" onClick={hide}>
              <i className="ri-close-fill" aria-label="Close menu" />
            </button>
            <div className="modal-body" onClick={hide} onKeyDown={hide} role="button" aria-label="Open" tabIndex={0}>
              {children}
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Modal