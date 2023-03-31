import React from "react";

const Modal = ({ text }) => {
  return (<>
     {/* for the modal to pop up just call [#popup1] */}
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Popup title</h2>
        <a class="close" href="#">
          &times;
        </a>
        <div class="content text-black">
         pop up text goes here
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;
