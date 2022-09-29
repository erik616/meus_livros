import ListItem from './components/ListItem';
import {getBooks} from './components/BooksService';
import SearchBar from './components/SearchBar';

import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import { useState, useEffect } from 'react';


const ListContainer = styled.div`
  display:flex;
  flex-direction: row:
  backgounf-color:#ccc;
  padding:10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function App() {

  const [books, setBook] = useState([]);
 
  useEffect(() => {
    setBook(getBooks());
  }, [])

  return (
    <Container>
      <h1>Meus Livros</h1>
      <hr/>
      <SearchBar setBook='setBooks'/>
      <ListContainer>
        {books.map(book => {
          return(
            <ListItem 
              key={book.link}
              img={book.img}
              title={book.title}
              price={book.price}
              link={book.link}
            />
          )
        })}
      </ListContainer>
      
    </Container>
  );
}

export default App;
