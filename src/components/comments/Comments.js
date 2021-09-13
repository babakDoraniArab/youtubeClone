import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";
const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1234 comemnts</p>
      <div className="comments__form d-flex w-100 my-2">
        <img src="/avatar.png" alt="" className="rounded-circle mr-3" />

        <form className="d-flex col-12" onSubmit={handleComment}>
          <input
            type="text"
            className="flex-grow-1"
            placeholder="write a comment"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {[...Array(10)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
