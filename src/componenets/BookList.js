import React,{useContext} from 'react'
import {BookContext} from '../contexts/BookContext';
import BookData from './BookData'


export default function BookList() {
    const {books} = useContext(BookContext);

    return books.length ? (
        <ul className="list-group">
            {
                books.map((book,index)=>{
                    return (<BookData  key={index} book={book} />)
                })
            }
            
        </ul>
    ):
    <div className="alert alert-danger"> There Is No Books Here ! :) </div>
}
