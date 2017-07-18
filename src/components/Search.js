import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const Search = () => (
  <div className='search-bar'>
    <Paper style={{padding: '5px 10px'}} zDepth={4}>
      <div>
        <TextField
          fullWidth={true}
        />
      </div>
    </Paper>
  </div>
);

export default Search;
