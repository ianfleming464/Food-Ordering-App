import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

// 2 seperate components in the same file - one for the overlay, one for the backdrop  - making up the modal.

const Backdrop = props => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// This helper constant is used to select where to access in the DOM
const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
