import React, { useState } from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import NoteComponent from "./Note";
import CreateAreaComponent from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((_, index) => index !== id));
  }

  const renderNotes = () => {
    return notes.map((noteItem, index) => (
      <NoteComponent
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    ));
  }

  return (
    <div>
      <HeaderComponent />
      <CreateAreaComponent onAdd={addNote} />
      {renderNotes()}
      <FooterComponent />
    </div>
  );
}

export default App;
