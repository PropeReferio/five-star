import FaStar from "react-icons/fa";

export const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

//onSelect is in StarRating.js, may cause an error.