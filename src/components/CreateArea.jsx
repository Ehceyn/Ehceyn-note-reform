import React, { useState } from "react";
// import Note from './Note';
// import OptionBox from "./OptionBox";
import { IoMdNotificationsOutline, IoMdMore } from "react-icons/io";
import { BsPersonPlus } from "react-icons/bs";
import { RiPaletteLine } from "react-icons/ri";
import { BiImageAdd, BiArchiveIn, BiUndo, BiRedo } from "react-icons/bi";

function CreateArea(props) {
  // FOR HANDLING INPUTS
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // FOR HANDLING EMPTY INPUT ERROR

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote() {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
          autoFocus
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <div id="form-buttons">
          <div>
            <span>
              <IoMdNotificationsOutline className="form-icons" />
            </span>
            <span>
              <BsPersonPlus className="form-icons" />
            </span>
            <span>
              <RiPaletteLine className="form-icons" />
            </span>
            <span>
              <BiImageAdd className="form-icons" />
            </span>
            <span>
              <BiArchiveIn className="form-icons" />
            </span>
            <span>
              <IoMdMore className="form-icons" />
            </span>
            <span>
              <BiUndo className="form-icons" />
            </span>
            <span>
              <BiRedo className="form-icons" />
            </span>
          </div>
          <div id="form-btn">
            <button
              onClick={(event) => {
                if (note.title.length >= 0 && note.content.length >= 0) {
                  submitNote();
                  event.preventDefault();
                } else {
                  return false;
                }
              }}
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={(event) => {
                if (note.title.length >= 0 && note.content.length >= 0) {
                  submitNote();
                  event.preventDefault();
                } else {
                  return false;
                }
              }}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
