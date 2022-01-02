import React from "react";

function ConfirmBox(props) {
  return (
    <section id="confirm-box" onClick={props.onCancel}>
      <div>
        <div>
          <h1>Do you want to delete all notes?</h1>
          <p>This action can not be retrieved</p>
        </div>
        <div>
          <button id="yes" onClick={props.onYes}>
            YES
          </button>
          <button onClick={props.onCancel}>CANCEL</button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmBox;
