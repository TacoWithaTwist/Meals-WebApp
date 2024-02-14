import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { APIContext } from '../../context/APIContext';
import { useAPIFetching } from '../../../ultis.jsx/useAPIFetching';
import { Button } from '@mui/base/Button';
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const APIObject = useContext(APIContext);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  function useSearch(text, obj) {
    obj.url = obj.url + text;
    const { items, error } = useAPIFetching(obj);
  }
  return (
    <>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button onClick={useSearch(searchQuery, APIObject)}></Button>
    </>
  );
}
