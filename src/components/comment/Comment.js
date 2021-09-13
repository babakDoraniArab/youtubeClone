import React from "react";
import moment from "moment";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex col-12">
      <img src="/avatar.png" alt="" className="rounded-circle mr-3" />
      <div className="comment__body ml-2">
        <p className="comment__header mb-0">
          summit day this is test • {moment("2020-05-06").fromNow()}
        </p>
        <p>nice video dude</p>
      </div>
    </div>
  );
};

export default Comment;
