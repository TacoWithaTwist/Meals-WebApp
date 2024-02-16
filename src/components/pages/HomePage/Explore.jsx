import ExploreMeal from "./ExploreMeal";
import "../../../cssModules/Explore.css";
import { useContext } from "react";
import { APIContext } from "../../context/APIContext";
export default function Explore() {
  const list = useContext(APIContext);
  return (
    <>
      <div className="Explore">
        <h2>Explore by Popular recipes!</h2>
        <div className="ExploreMealsContainer">
          {list.map((item, index) => (
            <ExploreMeal key={index} meal={item} />
          ))}
        </div>
      </div>
    </>
  );
}
