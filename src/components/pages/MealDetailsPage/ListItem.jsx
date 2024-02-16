import PropTypes from "prop-types";
import { Checkbox } from "@mui/material";
export default function ListItem({ item }) {
  return (
    <div className="ListItem">
      <Checkbox></Checkbox>
      <span>{item}</span>
    </div>
  );
}
ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};
