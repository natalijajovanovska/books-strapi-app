import React from 'react';

const Books = (props) => {
    const { books, quotes } = props;

    return (
        <>
            <div className='container'>
                <div className='col-8 offset-2'>
                    {books.map(book => {
                        const { id } = book;
                        const relevantQuotes = quotes.filter(quote => quote.book.id === book.id);
                        return (
                            <div className='card m-3 p-3'>
                                <img className=" img-fluid mx-auto" style={{ 'width': '10rem' }} src={book.img} alt="Card image cap" />
                                <p><span>{book.id}. </span>Title: {book.name}</p>
                                <p>Author: {book.author}</p>
                                <p>Quotes:</p>
                                {relevantQuotes.map(quote => (
                                    <p>"{quote.text}"</p>
                                ))}
                                <a href={book.link}>Amazon link</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Books;