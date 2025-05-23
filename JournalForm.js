import React, { useState } from 'react';
import axios from 'axios';

const JournalForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/journals', { title, content });
    onAdd(res.data);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Add Journal</button>
    </form>
  );
};

export default JournalForm;