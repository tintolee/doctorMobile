import * as React from 'react';
import { Searchbar,} from 'react-native-paper';
import {TextInput, View} from 'react-native'
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
   
    <Searchbar
      placeholder="Search UserName"
      onChangeText={onChangeSearch}
      value={searchQuery} />
    );
};

export default Search;

