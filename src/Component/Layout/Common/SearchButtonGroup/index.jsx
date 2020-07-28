import React from "react";
import {
  ButtonGroup,
  Button,
  makeStyles,
} from "@material-ui/core";
import AdvanceSearchIcon from "../../../../assets/images/icon-adv.png";
import SavedSearchIcon from "../../../../assets/images/icon-saved.png";
import CustomIcon from "../../../Shared/CustomIcon/index.jsx";

const useStyle = makeStyles({
    searchBtn: {
        border: 'none',
        fontSize: '13px',
        textTransform: 'none',
        textAlign: 'left',
        margin: '0'
    }
})


const searchBtnGroup = [
    { name: "Advance Search", icon: <CustomIcon iconSrc={AdvanceSearchIcon} /> },
    { name: "Saved Search", icon: <CustomIcon iconSrc={SavedSearchIcon} /> },
  ];
  
const SearchButtonGroup = () => {

    const classes = useStyle()
  return (
    <ButtonGroup
    size="large"
    color="primary"
    aria-label="large outlined primary button group"
  >
    {searchBtnGroup.map((btn, i) => (
      <Button key={i} startIcon={btn.icon} className={classes.searchBtn}>{btn.name}</Button>
    ))}
  </ButtonGroup>
  );
};

export default SearchButtonGroup;
