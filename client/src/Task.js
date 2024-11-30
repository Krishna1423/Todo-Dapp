import { List, ListItem, ListItemText } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import "./Task.css";

const Task = ({ taskText, onClick, classname }) => {
  return (
    <List className={`todo__list ${classname}`}>
      <ListItem>
        <ListItemText primary={taskText} />
      </ListItem>
      <DeleteTwoToneIcon
        fontSize="medium"
        color="error"
        style={{ margin: "10px", opacity: 1 }}
        onClick={onClick}
      />
    </List>
  );
};

export default Task;
