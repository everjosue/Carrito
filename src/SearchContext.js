import e from 'cors';
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // Otro estado relacionado con la búsqueda, si es necesario

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;