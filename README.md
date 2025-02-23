# Reading Journal

## Descrição
O **Reading Journal** é uma aplicação web desenvolvida em React para registrar e gerenciar livros lidos. O projeto foi criado como parte da disciplina de **Desenvolvimento de Sistemas Frontend** do Curso de Graduação Online da PUCRS.

## Funcionalidades
- **Página Inicial (InitialPage):** Exibe uma mensagem de boas-vindas.
- **Página Sobre (AboutPage):** Contém informações sobre o projeto, incluindo o seguinte texto:
  > Esta é uma aplicação para um CRUD de um Reading Journal. Este projeto foi elaborado na Disciplina de Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS.
- **Página de Listagem de Livros (BookListPage):** Exibe a lista de livros cadastrados com as seguintes informações:
  - Título
  - Autor
  - Gênero
  - Data da leitura
  - Ao clicar no nome do livro, o usuário é redirecionado para a página de atualização. Após submeter a atualização, o usuário será redirecionado à página de listágem.
- **Página de Cadastro (RegisterPage):** Permite o cadastro de novos livros.
  - Após o cadastro ou atualização de um livro, o usuário é redirecionado para a página de listagem.

## Tecnologias Utilizadas
- **React** para a construção da interface
- **React Router** para navegação entre as páginas
- **Context API ou Provider** para gerenciamento do estado da lista de livros

## Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/LucasMeirellesS/reading-jornal.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd reading-journal
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
5. Acesse `http://localhost:5173` no navegador.


