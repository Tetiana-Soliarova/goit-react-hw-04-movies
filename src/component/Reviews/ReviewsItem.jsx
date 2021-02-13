import React from "react";
import style from "./styleReview.module.css";

export default function ReviewItem({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <li key={review.id} className={style.reviewCard}>
          <h2>Author: {review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </>
  );
}
