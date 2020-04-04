import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './componenets/Navbar';
import BookList from './componenets/BookList';
import BookForm from './componenets/BookForm';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <div  className="container">
          <div  className="row">
            <div  className="col-10 mx-auto">
                <Navbar />  
                <BookList />
                <BookForm />
            </div>
          </div>
        </div>
      </BookContextProvider>
    </div>
  );
}

export default App;
