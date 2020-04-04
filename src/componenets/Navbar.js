import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

export default function Navbar() {

    const {books} = useContext(BookContext);

    return (
        <div>
            <h1 className="text-center display-3  text-white">List Of Books</h1>
            <p className="text-center display-4 border-bottom pb-4 my-2 text-white"> Currently You Have {books.length} Books</p>
        </div>
    )
}
