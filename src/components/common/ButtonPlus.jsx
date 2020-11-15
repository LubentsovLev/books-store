import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
export const ButtonPlus = React.memo((props) => {
  return (
    <Button variant="contained" color="secondary">
      <AddCircleIcon></AddCircleIcon>
    </Button>
  );
});
