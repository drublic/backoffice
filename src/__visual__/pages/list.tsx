import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import Listing from "../../Listing";
import listingData from "../data/listing_data";
import listingHeaders from "../data/listing_headers";
import BackButton from "../../BackButton";

const useStyles = makeStyles((theme: Theme) => ({
  headline: {
    marginTop: theme.spacing(4),
  },
}));

const List = () => {
  const [hasLoader, setHasLoader] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const classes = useStyles();

  setTimeout(() => {
    setData(listingData);
    setHasLoader(false);
  }, 1000);

  return (
    <>
      <BackButton url="/" />

      <Typography variant="h4" className={classes.headline}>
        Listing
      </Typography>

      <Listing
        title="Christmas Time"
        data={data}
        headers={listingHeaders}
        orderBy="username"
        hasLoader={hasLoader}
        onUpdateSelection={(selection: any) => {
          console.log(selection);
        }}
        toolbarContent={
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
      />

      <Typography variant="h6" className={classes.headline}>
        Integrated
      </Typography>

      <Listing
        data={listingData.slice(0, 2)}
        headers={listingHeaders}
        orderBy="username"
        order="desc"
        isIntegrated
      />
    </>
  );
};

export default List;
