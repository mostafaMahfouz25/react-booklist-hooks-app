import React,{useContext,useState} from 'react'
import {BookContext} from '../contexts/BookContext';


export default function BookForm({book}) 
{

    const {addBook} = useContext(BookContext);
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addBook(title,author);
        setTitle('')
        setAuthor('')
    }
    return (
           
        <form onSubmit={handleSubmit} className="border p-3 my-4">
            <div className="form-group">
                <label  className="text-white">Name Of The Book</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label  className="text-white">Name Of The Author</label>
                <input type="text" className="form-control" value={author} onChange={(e)=>setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success btn-block" value="Add New Boook"  />
            </div>
        </form>
    )
}
