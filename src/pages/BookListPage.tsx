import React from 'react';
import BookList from '../components/BookList/BookList';

const BookListPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <BookList />
        </div>
    );
};

export default BookListPage;