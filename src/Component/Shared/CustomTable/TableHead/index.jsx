import React from "react";
import PropTypes from "prop-types";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from "@material-ui/core";
import RightCarretImgSrc from '../../../../assets/images/shape-36.png'
import CustomIcon from '../../CustomIcon/index.jsx'

const EnhancedTableHead = (props) => {
  console.log({ TableHeadprops: props });
  const {
    onSelectAllClick,
    numSelected,
    rowCount,
    headCells,
  } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "default"}
          >
             {headCell.label} <CustomIcon iconSrc={RightCarretImgSrc}/>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead;
