import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl">Sobre</h1>
            <br/>
            <p>Esta é uma aplicação para um CRUD de um Reading Jornal. Este projeto foi elaborado na Disciplina de Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS</p>
        </div>
    );
};

export default AboutPage;