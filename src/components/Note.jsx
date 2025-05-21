import React, { useState, useEffect } from 'react';
import noteData from '../data/data.json';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [showStats, setShowStats] = useState(false);
  useEffect(() => {
    setNotes(noteData);
  }, []);

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const filterValue = e.target.elements.authorFilter.value;
        if (filterValue === '') {
          setNotes(noteData);
        } else {
          const filteredNotes = noteData.filter(note => 
            note.author.toLowerCase().includes(filterValue.toLowerCase())
          );
          setNotes(filteredNotes);
        }
      }}>
        <label>
          Filter by author:
          <input 
            type="text"
            name="authorFilter"
            placeholder="Enter author name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {showStats ? (
        <div>
          <button onClick={() => setShowStats(false)}>Hide Statistics</button>
          <p>
            {(() => {
              const authorCounts = {};
              noteData.forEach(note => {
                authorCounts[note.author] = (authorCounts[note.author] || 0) + 1;
              });
              const maxAuthor = Object.entries(authorCounts).reduce((a, b) => 
                a[1] > b[1] ? a : b
              );
              return `Author with most notes: ${maxAuthor[0]} (${maxAuthor[1]} notes)`;
            })()}
          </p>
        </div>
      ) : (
        <button onClick={() => setShowStats(true)}>Show Statistics</button>
      )}
      {notes.map((note) => (
        <fieldset key={note.id}>
          <legend>{note.author}</legend>
          <p>{note.content}</p>
        </fieldset>
      ))}
    </div>
  );
};

export default Note;
