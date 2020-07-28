import React from "react";
import { Paper, IconButton, InputBase, makeStyles } from "@material-ui/core";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";


const useStyle = makeStyles((theme) => ({
    input: {
      flex: 1,
      marginRight: theme.spacing(1)
    },
    iconButton: {
      padding: 10,
    },
    quickSearch: {
      borderRadius: '25px'
    }
  }));

  
const SearchInput = () => {

    const classes = useStyle()
  return (
    <Paper component="form" className={classes.quickSearch}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchSharpIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Quick Seacrh"
      />
    </Paper>
  );
};

export default SearchInput;
