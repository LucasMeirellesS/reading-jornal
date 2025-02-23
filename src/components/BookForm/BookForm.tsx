import React, { useState } from "react";
import { useBooksContext } from "../../context/BookContext";
import { useNavigate } from "react-router-dom";

export const BookForm: React.FC = () => {

  const { books ,addBook, bookToUpdate, updateBook} = useBooksContext();
  const navigate = useNavigate();

  // Estado do formulário
  const [formData, setFormData] = useState({
    title: bookToUpdate ? bookToUpdate.title : "",
    author: bookToUpdate ? bookToUpdate.author : "",
    gender: bookToUpdate ? bookToUpdate.gender : "",
    date: bookToUpdate ? bookToUpdate.date : "",
  });

  // Atualiza o estado ao digitar nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmitUpdate = (e: React.FormEvent) => {
    e.preventDefault(); // Evita recarregar a página

    const book = {
      id: bookToUpdate ? bookToUpdate.id : 0,
      ...formData,
    };

    updateBook(book); // Adiciona o livro à lista
    console.log("Livro atualizado:", book);

    // Reseta o formulário
    setFormData({ title: "", author: "", gender: "", date: "" })
    navigate('/book-list');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita recarregar a página

    // Gerando um ID sequencial
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

    const newBook = {
      id: newId,
      ...formData,
    };

    addBook(newBook); // Adiciona o livro à lista
    console.log("Livro adicionado:", newBook);

    // Reseta o formulário
    setFormData({ title: "", author: "", gender: "", date: "" });
    navigate('/book-list');
  };

  return (
    <div>
      <h1 className="text-5xl">Book Form</h1>
      <br />
      <form onSubmit={bookToUpdate ? handleSubmitUpdate : handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            className="border p-2 rounded" 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="font-medium">Autor</label>
          <input 
            type="text" 
            id="author" 
            name="author" 
            className="border p-2 rounded" 
            value={formData.author} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender" className="font-medium">Gênero</label>
          <input 
            type="text" 
            id="gender" 
            name="gender" 
            className="border p-2 rounded" 
            value={formData.gender} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="font-medium">Data</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            className="border p-2 rounded" 
            value={formData.date} 
            onChange={handleChange} 
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
            Submit
        </button>
      </form>
    </div>
  );
};



