import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { useContext, useEffect, useState } from "react";
import { APIContext } from "../../context/APIContext";
export default function CheckList({ mealId }) {
  const list = useContext(APIContext);
  if (list[parseInt(mealId)]) {
    return (
      <>
        {console.log(list)}
        {list[parseInt(mealId)].forEach((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </>
    );
  }
}
CheckList.propTypes = {
  mealId: PropTypes.string.isRequired,
};
