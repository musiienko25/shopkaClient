import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./starRating.scss";

export default function StarRating({ readonly, initialValue }) {
  const [rating, setRating] = useState(3);

  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="rating">
      {" "}
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={initialValue}
        readonly={readonly}
        /* Available Props */
      />
    </div>
  );
}
