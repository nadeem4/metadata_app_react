import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  CardHeader,
  Grid,
} from "@material-ui/core";
import CustomIcon from "../../../Shared/CustomIcon/index.jsx";
import PinnedAssetImgSrc from "../../../../assets/images/icon-pin.png";
import UserInfo from "../../../Shared/UserInfo/index.jsx";

const PinnedAssets = () => {
  return (
    <Card>
      <CardHeader
        avatar={<CustomIcon iconSrc={PinnedAssetImgSrc} />}
        title="Pinned Assets"
      />
      <Divider></Divider>
      <CardContent>
        <Typography>Dataset Lorem Epsum</Typography>
        <Typography>
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt neque quidem earum libero maxime ducimus blanditiis quas.
          Molestias eveniet beatae eius et dicta sequi vero tenetur cum,
          doloremque modi quas?
        </Typography>
        <Grid container spacing={2}>
          <Grid item container xs={5}>
            <Grid item xs={12}>
            <UserInfo name="James Smith" desc="Super Admin" />
            </Grid>
            

            <Grid item xs={12}>
            <UserInfo name="James Smith" desc="Super Admin" />
            </Grid>
          </Grid>
          <Grid item xs={7}>
            {" "}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PinnedAssets;
