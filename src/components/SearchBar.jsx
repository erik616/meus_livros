import { useState } from 'react';
import styled from 'styled-components';
import { FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'

import { getBooks } from './BooksService';

const SearchHeader = styled.div`
    margin-top: 4px;
    display:flex;
    max-width:51%;
    min-width:20%;
`;



function SearchBar(props) {
    const [search, setSearch] = useState('');
     
    function handleOnSubmit(event) {
        event.preventDefault();
        const books = getBooks();
        const results = books.filter(book => book.title.toLowerCase().indexOf(search) !== 1);
        props.setBook(results);
    }
     
    function handleSearchChange(event) {
        setSearch(event.target.value.toLowerCase());
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <SearchHeader>

                <FormControl
                    placeholder="Search your books"
                    aria-label="Search your books"
                    onChange={handleSearchChange}
                />
                <div>
                    <Button type='submit'>
                        <BsSearch />
                    </Button>
                </div>

            </SearchHeader>
        </form>
    )
}

export default SearchBar