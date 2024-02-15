import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import { APIContext } from '../../context/APIContext';
// import { useAPIFetching } from '../../../ultis.jsx/useAPIFetching';
import { Button } from '@mui/base/Button';
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  // const url = useContext(APIContext);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // function useSearch(text, obj) {
  //   obj.url = obj.url + text;
  //   const { items, error } = useAPIFetching(obj);
  // }
  return (
    <>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        variant="outlined"
        margin="normal"
      />
      <Button>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeHmkz66QEbicKAP0-1C4FmheHZV6ieWMNrifMyueqQ&s"
          alt="#"
        />
      </Button>
    </>
  );
}
