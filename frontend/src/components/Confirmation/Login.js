import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";


function LoginModal({setShowModal}) {

  return (
    <>
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
    </>
  );
}

export default LoginModal;