import React from 'react';
import axios from 'axios';

const JournalList = ({ journals, onDelete }) => {
  const deleteJournal = async (id) => {
    await axios.delete(`http://localhost:5000/api/journals/${id}`);
    onDelete(id);
  };

  return (
    <ul>
      {journals.map((journal) => (
        <li key={journal._id}>
          <h3>{journal.title}</h3>
          <p>{journal.content}</p>
          <button onClick={() => deleteJournal(journal._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default JournalList;