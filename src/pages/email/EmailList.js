import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EmailList({ emailList, deleteEmail }) {
  const [toBeDeleted, setToBeDeleted] = React.useState([]);
  
  const handleToggle = (value) => () => {
    const currentIndex = toBeDeleted.indexOf(value);
    const newChecked = [...toBeDeleted];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setToBeDeleted(newChecked);
  };

  const deleteSingleEmail = (value) => {
    deleteEmail([value]);
    const currentIndex = toBeDeleted.indexOf(value);
    const newChecked = [...toBeDeleted];
    if (currentIndex !== -1) {
      newChecked.splice(currentIndex, 1);
    }
    setToBeDeleted(newChecked);
  };

  return (
    <List className="w-full max-w-xl" sx={{ bgcolor: "background.paper" }}>
      {emailList.map((email, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton onClick={
                (e) => {
                  e.preventDefault();
                  deleteSingleEmail(email["id"])}} edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onClick={handleToggle(email["id"])}
                  checked={toBeDeleted.indexOf(email["id"]) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={email["name"]}
                sx={{
                  "& .MuiTypography-root": {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    display: "contents",
                  },
                }}
                className="whitespace-nowrap text-ellipsis	overflow-hidden	block w-2"
              />
              <ListItemText
                sx={{
                  "& .MuiTypography-root": {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    display: "contents",
                  },
                }}
                className="mr-2 w-44 whitespace-nowrap text-ellipsis overflow-hidden "
                id={labelId}
                primary={email["subject"]}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
      {toBeDeleted.length > 0 && (
        <ListItem key={emailList.length}>
          <IconButton
            edge="start"
            aria-label="comments"
            onClick={() => {
              deleteEmail(toBeDeleted);
              setToBeDeleted([]);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      )}
    </List>
  );
}
