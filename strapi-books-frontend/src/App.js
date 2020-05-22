import React from 'react';
import axios from 'axios';
import './App.css';
import Books from './components/Books';

class App extends React.Component {

  state = {
    fetchedBooks: [],
    fetchedQuotes: []
  }

  async componentDidMount(){
const booksData = await axios({
  method: 'GET',
  url: 'http://localhost:1337/books'
});

const quotesData = await axios({
  method: 'GET',
  url: 'http://localhost:1337/quotes'
});

const fetchedBooks = booksData.data;
const fetchedQuotes = quotesData.data;

this.setState({fetchedBooks, fetchedQuotes});
  }

  render() {
    const {fetchedBooks, fetchedQuotes} = this.state;
    return (
      <div className='text-center m-3'>
        <h1>The Books App</h1>
        <Books books={fetchedBooks} quotes={fetchedQuotes} />
      </div>
    );
  }
}

export default App;
