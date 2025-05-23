import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import './App.css';

function App() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/journals').then((res) => setJournals(res.data));
  }, []);

  const addJournal = (newJournal) => setJournals([newJournal, ...journals]);
  const deleteJournal = (id) => setJournals(journals.filter(j => j._id !== id));

  return (
    <div>
      <h1>Daily Journals</h1>
      <JournalForm onAdd={addJournal} />
      <JournalList journals={journals} onDelete={deleteJournal} />

      {/* 🌟 Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Daily Journals App❤️</p>
      </footer>
    </div>
  );
}

export default App;
