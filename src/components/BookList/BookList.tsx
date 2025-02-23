import { Link } from "react-router-dom";
import { useBooksContext } from "../../context/BookContext";

const BookList = () => {
    const {books, deleteBook, setBookToUpdate} = useBooksContext();

    const formatDate = (dateString: string) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <> 
        <div className="flex items-center flex-col justify-center min-h-screen">
            <h1 className="text-5xl">Book List</h1>
            <br />
            <ul className="list-disc list-inside">
                {books.map((book) => (
                    <li key={book.id}> <Link to='/register' className="text-black-600 hover:underline hover:text-blue-600" onClick={()=>{
                        setBookToUpdate(book);
                    }}> {`${book.title} - ${book.author} - ${book.gender} - ${formatDate(book.date)}`} </Link><button className="border border-gray-500 text-gray-500 px-2 py-1 rounded-md hover:bg-gray-500 hover:text-white transition" onClick={() => {
                        deleteBook(book.id);
                    }}>Excluir</button></li>))
                }
            </ul>
            <p className="self-start ml-8"><Link onClick={
                                () => {
                                    setBookToUpdate(null);
                                }
                            } to="/register" className="block text-black-600 hover:underline hover:text-blue-600">Cadastro</Link></p>  
        </div>
        </>
        
    );
}

export default BookList;