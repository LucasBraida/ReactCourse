import React from "react";

function Backdrop(props){
  return (
    props.show ? <div className='backdrop' onClick={props.clicked}>{props.children}</div> : null
  )
}
const Popup = props => {
  return (
    <Backdrop show={props.show} clicked={props.handleClose}>
      <div className="popup-box" onClick={props.handleClose}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>s2</span>
        {props.content}
      </div>
    </div>
    </Backdrop>

  );
};

export default Popup;
