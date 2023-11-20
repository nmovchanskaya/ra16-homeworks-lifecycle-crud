import { useState, useEffect, useCallback } from 'react';
import { Form } from './components/Form';
import { NoteList } from './components/NoteList';
import { createRequest } from './api/createRequest';
import { NoteType } from './components/NoteType';
import './App.css';

function App() {

  const listNotesServ = async (
    url: string, 
    callback: (data: NoteType[]) => void
  ) => {
    createRequest({
      url,
      sendMethod: 'GET',
      callback
    });
  }

  const addNoteServ = async (
    url: string, 
    data: NoteType, 
    callback: (data: NoteType[]) => void
  ) => {
      createRequest({
        url,
        sendMethod: 'POST',
        data,
        callback
      });
  }

  const delNoteServ = async (
    url: string, 
    id: number, 
    callback: (data: NoteType[]) => void
  ) => {
      createRequest({
        url,
        sendMethod: 'DELETE',
        id,
        callback,
      });
  }

  const notes = [
    {
      content: '',
      id: 0
    }
  ];

  const [curNotes, setNotes] = useState(notes);
  const initialState = {
    content: ''
  }
  const [form, setForm] = useState(initialState);
  const url = 'http://localhost:7070/notes';

  //fetch only once
  useEffect(() => {
    const resp = listNotesServ(url, (data: NoteType[]) => {
      setNotes(data);
    })

    return () => {

    }
  }, []);

  const AddNote = (event: React.FormEvent) => {
    event.preventDefault();

    if (form.content !== '') {
      const note = {
        "id": 0,
        "content": form.content
      };

      const resp = addNoteServ(url, note, (data: NoteType[]) => {
        setNotes(data);
      });
    }

    setForm(initialState);
  }

  const deleteNote = (id: number) => {
    const resp = delNoteServ(url, id, (data: NoteType[]) => {
      setNotes(data);
    });
  }

  return (
    <div className="container">
      <Form addNote={AddNote} setForm={setForm} form={form}/>
      <NoteList notes={curNotes} onDelete={deleteNote}/>
    </div>
  );
}

export default App;
