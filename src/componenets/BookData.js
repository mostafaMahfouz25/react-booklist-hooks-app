import React,{useContext} from 'react'
import {BookContext} from '../contexts/BookContext';


export default function BookData({book}) 
{

    const {removeBook} = useContext(BookContext);

    return (
            <li className="list-group-item" > 
                <h3>
                    {book.title}  
                    <i className="fa fa-trash btn btn-danger float-right" onClick={()=>removeBook(book.id)}></i> 
                </h3>
                <h5>{book.author}</h5>
            </li>
    )
}
