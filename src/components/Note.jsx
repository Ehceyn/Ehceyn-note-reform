import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{props.toggleEdit(props.id)}}>EDIT</button>
      <button onClick={()=>{props.onDelete(props.id)}}>DELETE</button>
      {/* {props.id(props.id)} */}
    </div>
  );
}

export default Note;
