import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme";
import Toggle from "./Toggler";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Error from "./Error";
import ClearAll from "./ClearAll";
import ConfirmBox from "./ConfirmBox";
// import SideNavbar from "./SideNavbar";

// import OptionBox from "./OptionBox";
// import {v4 as uuid} from "uuid";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  useEffect(() => {
    const timer = setTimeout(() => {
      // setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // STATE FOR ADDING AND DELETING NOTE AND MESSAGE-BOX
  const [note, setNote] = useState([]);

  const [error, setError] = useState();

  const [message, setMessage] = useState();

  function addNote(newNote) {
    if (note === []) {
      return setError(<Error />);
    } else {
      setNote((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  }

  function deleteNote(id) {
    console.log(deleteNote);
    setNote((prevNotes) => {
      return prevNotes.filter((noteItem, d) => {
        return d !== id;
      });
    });
  }

  function Message() {
    setMessage(
      <ConfirmBox
        onYes={() => {
          note.length > 0 && setNote([]);
          setMessage();
        }}
        onCancel={() => setMessage()}
      />
    );
  }

  const time = () => new Date().toLocaleString();
  console.log(time);

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        <Header />
        <div className="App">
          {/* <aside><SideNavbar/>
      </aside> */}
          <Toggle theme={theme} toggleTheme={themeToggler} />

          <section key={1}>
            <div>
              <div>{message}</div>
              <CreateArea onAdd={addNote} />
              <div>{error}</div>
              <section id="note-container">
                {note.length === 0 ? (
                  <h3 className="no-note-msg">
                    You don't have any note. What would you like to add?
                  </h3>
                ) : (
                  note.map((noteItem, index) => {
                    return (
                      <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                      />
                    );
                  })
                )}
              </section>
            </div>
            <section className="footer-section">
              {note.length !== 0 && <ClearAll onClearAll={Message} />}
              <Footer />
            </section>
          </section>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
