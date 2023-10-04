import React from "react";
import "./DeleteDialog.css";

const DeleteDialog = (props) => {
  const { onClose, callback, label, message } = props;
  return (
    <div className="popup-overlay d-flex justify-content-center align-items-center flex-column">
      <h3>Are you sure?</h3>
      <p className="text-muted m-0">
        {message }
      </p>
      <div>
        <hr className="mb-4" />
        <button className="btn btn-secondary me-3" onClick={onClose}>
          No
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            callback();
            onClose();
          }}
        >
          Yes,{label ? label : "Delete"} it!
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;
