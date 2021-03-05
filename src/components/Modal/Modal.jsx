import React, { useState } from "react";
//import { Link } from "gatsby";

import '../../styles/header/header.scss';

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

const Modal = ({ children, modalClassName }) => {

  const toggleClassName = modalClassName || "modal";

  return (
  <ToggleContent
      toggle={show => <div onClick={show}><i className="ri-more-fill" aria-label="Open menu" /></div>}
      content={hide => (
        <div className={toggleClassName}>
          <button onClick={hide} className="close"><i className="ri-close-fill" aria-label="Close menu" /></button>
          <div className="modal-content">
            {children}
          </div>
        </div>
      )}
    />
  )
}

export default Modal