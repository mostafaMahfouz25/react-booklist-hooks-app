import React,{useState,createContext,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();
function BookContextProvider(props) {


    const [books,setBooks] = useState(JSON.parse(localStorage.getItem("books"))||[])

    // [
    //     {title:"First Book",author:"Mostafa Mahfouz",id:uuidv4()},
    //     {title:"Second Book",author:"Mostafa Mahfouz",id:uuidv4()},
    //     {title:"Third Book",author:"Mostafa Mahfouz",id:uuidv4()},
    // ]

    const addBook = (title,author)=>{
        setBooks([...books,{title,author,id:uuidv4()}])
    }

    const removeBook = (id)=>{
        setBooks(books.filter(book=>book.id!==id));
    }

    useEffect(()=>{
        localStorage.setItem("books",JSON.stringify(books))
    },[books])



    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider;