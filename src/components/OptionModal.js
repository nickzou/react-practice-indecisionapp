import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal className="test-modal"
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={(e)=>{
                props.handleClearSelectedOption(); 
            }}
        >Okay</button>
    </Modal>
);

export default OptionModal;