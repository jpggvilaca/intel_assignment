import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { SearchWrapper, Input, Button } from './SearchStyles';

interface SearchProps {
  onSearch: (queryString: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [queryString, setQueryString] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(queryString);
    }

    return;
  };

  const handleSearch = () => {
    onSearch(queryString);
  };

  return (
    <SearchWrapper>
      <Input
        value={queryString}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchWrapper>
  );
};

export default Search;
