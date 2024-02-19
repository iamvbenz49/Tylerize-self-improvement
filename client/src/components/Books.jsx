// src/App.js
import React, { useState } from 'react';
import '../styles/books.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showAll, setShowAll] = useState(false);

  const addBook = () => {
    if (title && description) {
      setBooks([...books, { title, description }]);
      setTitle('');
      setDescription('');
    } else {
      alert('Please enter both title and description.');
    }
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>Books Notes Tracker</h1>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='desc'>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button onClick={addBook}>Add Book</button>
      <div>
        <h2>Saved Books</h2>
        {books.length > 0 && (
          <ul>
            {showAll
              ? books.map((book, index) => (
                  <li key={index}>
                    <span>
                      <strong>{book.title}</strong>: {book.description}
                    </span>
                    <button onClick={() => deleteBook(index)}>Delete</button>
                  </li>
                ))
              : null}
          </ul>
        )}
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Hide All' : 'Show All'}
        </button>
      </div>
    </div>
  );
};

export default App;
