import Card from "./Shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTrashAlt color="black" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="black" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
