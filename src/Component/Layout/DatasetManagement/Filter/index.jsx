import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  FormControl,
  FormLabel,
  FormGroup,
  Paper,
  Button,
  TextField,
  ButtonGroup,
  CardActions,
  Typography,
  IconButton,
  InputBase,
  makeStyles,
  withStyles,
  InputLabel,
  NativeSelect,
  Select,
  MenuItem,
  Input,
} from "@material-ui/core";
import FilterIconSrc from "../../../../assets/images/icon-filter.png";
import CustomIcon from "../../../Shared/CustomIcon/index.jsx";
import SimpleInput from "../../../Shared/FormInput/SimpleInput/index.jsx";
import FilterInput from "../../../Shared/FormInput/FilterInput/index.jsx";

const useStyle = makeStyles((theme) => ({
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  quickSearch: {
    width: "100%",
    boxShadow: "none",
    border: "1px solid #ced4da",
    marginBottom: 5,
  },
  lable: {
    color: "rgb(0,0,0)",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 6,
    width: "100%",
  },
}));

const DatasetFilterColums = [
  { name: "Dataset Asset Name", type: "text", fullWidth: "true" },
  { name: "Tag Type Name", type: "filter", fullWidth: "true" },
  { name: "Created By", type: "text", fullWidth: "true" },
  { name: "Created Date", type: "date", fullWidth: "true" },
  { name: "Last Updated Date", type: "date", fullWidth: "true" },
  { name: "Last Updated By", type: "text", fullWidth: "true" },
  { name: "Server Name", type: "text", fullWidth: "true" },
  { name: "Version", type: "text", fullWidth: "true" },
  { name: "Column Name", type: "text", fullWidth: "true" },
  { name: "Object Date Created", type: "date", fullWidth: "true" },
  { name: "Object Date Updated", type: "date", fullWidth: "true" },
];

const DatasetFilter = () => {
  const classes = useStyle();
  return (
    <Card>
      <CardHeader
        avatar={<CustomIcon iconSrc={FilterIconSrc} />}
        action={<Button>Saved Filter</Button>}
        title="Filter"
      />
      <Divider></Divider>
      <CardContent>
        <form>
          {DatasetFilterColums.map((col) =>
            col.type == "filter" ? (
              <FilterInput name={col.name} fullWidth="true" />
            ) : (
              <SimpleInput name={col.name} fullWidth="true" type={col.type} />
            )
          )}
        </form>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color="primary">
          Clear
        </Button>
        <Button variant="contained" disableElevation color="primary">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default DatasetFilter;
