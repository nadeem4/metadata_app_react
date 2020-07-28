import React from "react";
import {
  Card,
  Tabs,
  CardHeader,
  Tab,
  CardContent,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DatasetTable from "../../../Shared/CustomTable/index.jsx";
import UserInfo from "../../../Shared/UserInfo/index.jsx";
import AssociateddTags from "../AssociatedTags/index.jsx";
import CustomIcon from "../../../Shared/CustomIcon/index.jsx";
import InfoIconSrc from "../../../../assets/images/info.png";
import Aux from "../../../../Hoc/aux";

const headCells = [
  {
    id: "Dataset Name",
    numeric: false,
    disablePadding: true,
    label: "Dataset Name",
  },
  { id: "Created", numeric: true, disablePadding: false, label: "Created" },
  {
    id: "LastUpdated",
    numeric: true,
    disablePadding: false,
    label: "Last Updated",
  },
  {
    id: "AssociatedTags",
    numeric: true,
    disablePadding: false,
    label: "Associated Tags",
  },
];

const rows = [
  createData(
    {
      name: "Lorem laboris",
      desc:
        "Velit magna proident in sint tempor nulla tempor labore excepteur exercitation.",
    },
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <AssociateddTags />
  ),
  createData(
    {
      name: "Lorem laboris",
      desc:
        "Velit magna proident in sint tempor nulla tempor labore excepteur exercitation.",
    },
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <AssociateddTags />
  ),
  createData(
    {
      name: "Lorem laboris",
      desc:
        "Velit magna proident in sint tempor nulla tempor labore excepteur exercitation.",
    },
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <AssociateddTags />
  ),
  createData(
    {
      name: "Lorem laboris",
      desc:
        "Velit magna proident in sint tempor nulla tempor labore excepteur exercitation.",
    },
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <AssociateddTags />
  ),
  createData(
    {
      name: "Lorem laboris",
      desc:
        "Velit magna proident in sint tempor nulla tempor labore excepteur exercitation.",
    },
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <AssociateddTags />
  ),
  createData(
    {
      name: "Lorem laboris",
      desc:
        "Velit magna proident in sint tempor nulla tempor labore excepteur exercitation.",
    },
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <UserInfo name="James Smith" desc="05/01/2020" />,
    <AssociateddTags />
  ),
];

function createData(name, calories, fat, carbs, protein) {
  return [name, calories, fat, carbs, protein];
}

const Datasets = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="primary"
          >
            <Tab label="All Assets" value={0} />
            <Tab label="Annotated Assets" value={1} />
            <Tab label="Un-Annotated Assets" value={2} />
          </Tabs>
        }
        action={
          <IconButton >
           <CustomIcon iconSrc={InfoIconSrc} /> <Typography>Select one or more Dataset for tag editing</Typography>
        </IconButton>
         
        }
      />

      <CardContent>
        <DatasetTable headCells={headCells} rows={rows} />
      </CardContent>
    </Card>
  );
};

export default Datasets;
