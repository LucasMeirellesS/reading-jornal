import React from 'react';
import { Link } from 'react-router-dom';
import { useBooksContext } from '../../context/BookContext';



const NavBar: React.FC = () => {
    const { setBookToUpdate } = useBooksContext();
    return <div>
        <header>
            <ul>
                <li><Link to="/" className="block text-black-600 hover:underline hover:text-blue-600">Página Inicial</Link></li>
                <li><Link to="/about" className="block text-black-600 hover:underline hover:text-blue-600">Sobre</Link></li>
                <li><Link to="/book-list" className="block text-black-600 hover:underline hover:text-blue-600">Lista de Livros</Link></li>
                <li><Link onClick={
                    () => {
                        setBookToUpdate(null);
                    }
                } to="/register" className="block text-black-600 hover:underline hover:text-blue-600">Cadastro</Link></li>
            </ul>
        </header>
    </div>
}

export default NavBar;