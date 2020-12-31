// frontend/src/components/SignUpModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUp from './SignUp';

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='nav-link' onClick={() => setShowModal(true)}>SignUp</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUp />
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;