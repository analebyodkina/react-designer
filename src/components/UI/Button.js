import MailIcon from "../Icons/MailIcon";
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import "./Button.scss";
import React from 'react';

Modal.setAppElement('#root');


   function Button() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <button className="btn" onClick={() => {openModal(); setIsModalOpen(true);}}> 
        <MailIcon /> 
        hi@yourname.com
        <div id="spin"></div>
    </button> 
    <Modal         
        isOpen={isModalOpen} 
        onRequestClose={closeModal}        
        contentLabel="Example Modal"
        className="modal" 
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 9999,
            overflow: "hidden",
          },          
        }} 

        
    >       

      <div className="modal__container">
        <div className="modal__body">
          <h2 className="modal__title">Subscribe</h2>
          <form className="modal__form">
            <input className="modal__input" type="text" placeholder="Enter your name" />
            <input className="modal__input" type="email" placeholder="Enter your email" />
            <button type="submit" className="modal__button">Submit</button>				
          </form>
          <div className="modal__close" onClick={() => {closeModal(); setIsModalOpen(false);}}>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
        
    </Modal>
      
    </>
    
    
  );
}

export default Button;