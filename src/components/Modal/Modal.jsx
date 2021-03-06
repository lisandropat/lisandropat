import React from "react";
import { useAnimatePresence } from "use-animate-presence";

import '../../styles/modal/modal.scss';

const variants = {
  y: { from: -800, to: 0 },
};

/* 
  Uses .modal-button className for the opener, .modal-content for the container, .modal-close for close button and .modal-body for the body of the modal. 
  Also, the wrapper of the modal uses .modal, but you can replace it as you want using the prop modalClassName.
  .modal-overlay is the background color when opening a modal.
*/

const Modal = ({ children, modalClassName, buttonModal }) => {

  const toggleClassName = modalClassName || "modal";

  const animatedDiv = useAnimatePresence({
    variants,
    initial: "hidden",
    options: {
      stiffness: 100,
      mass: 0.25,
      damping: 12,
    },
  });

  return (
    <div>
      <div 
        onClick={() => animatedDiv.togglePresence()} 
        onKeyDown={() => animatedDiv.togglePresence()} 
        className="modal-button" 
        role="button" 
        aria-label="Open" 
        tabIndex={0}
      >
        {buttonModal}
      </div>
      {animatedDiv.isRendered && 
        <div className={toggleClassName} ref={animatedDiv.ref}>
          <div 
            className="modal-overlay" 
            onClick={() => animatedDiv.togglePresence()} 
            onKeyDown={() => animatedDiv.togglePresence()} 
            role="button" 
            aria-label="Open" 
            tabIndex={0} 
          />
          <div className="modal-content">
            <button className="modal-close" onClick={() => animatedDiv.togglePresence()}>
              <i className="ri-close-fill" aria-label="Close menu" />
            </button>
            <div className="modal-body" onClick={() => animatedDiv.togglePresence()} onKeyDown={() => animatedDiv.togglePresence()} role="button" aria-label="Open" tabIndex={0}>
              {children}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Modal