import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";


function LoginModal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
        <Modal onClose={() => setShowModal(true)}>
          <LoginForm />
        </Modal>
    </>
  );
}

export default LoginModal;