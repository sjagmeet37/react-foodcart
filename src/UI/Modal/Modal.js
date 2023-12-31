import Cart from "../../Meal/Cart/Cart";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";
import React from "react";

function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <Card>
      <div className={`${styles.modal}`}>
        <div>{props.children}</div>
      </div>
    </Card>
  );
}

const Modal = (props) => {
  return (
    <React.Fragment>
      ReactDOM.createRoot(
      <Backdrop />, document.getElementById('backdrop-root'))
      ReactDOM.createRoot(
      <ModalOverlay>{props.children}</ModalOverlay> , document.getElementById('overlay-root'))
    </React.Fragment>
  );
};

export default Modal;
