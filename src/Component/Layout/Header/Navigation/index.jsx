import React from "react";

import DashboardIcon from "../../../../assets/images/icon-dashboard.png";
import DatasetIcon from "../../../../assets/images/icon-dataset.png";
import TagIcon from "../../../../assets/images/icon-tag.png";
import LogIcon from "../../../../assets/images/icon-log.png";
import { Tabs, Tab } from "@material-ui/core";
import CustomIcon from "../../../Shared/CustomIcon/index.jsx";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const selectTab = (event, newValue) => {
    console.log({event: event, newValue: newValue})
    setSelectedTab(newValue);
  };

  const tabs = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Datasets",
      icon: DatasetIcon,
    },
    {
      name: "Tags",
      icon: TagIcon,
    },
    {
      name: "Log",
      icon: LogIcon,
    },
  ];

  return (
    <Tabs
      indicatorColor="primary"
      textColor="secondary"
      value={selectedTab}
      onChange={selectTab}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          href={`/${ tab.name === "Dashboard" ?  "" : tab.name}`}
          icon={
            <div>
              <CustomIcon
                iconSrc={tab.icon}
                style={{ verticalAlign: "middle" }}
              />
              {tab.name} 
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default Navigation;
