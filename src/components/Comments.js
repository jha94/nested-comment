import React, { useState } from "react";
import Action from "./Action";
const Comments = ({ commentData, handleInsertNode, handleDeleteNode }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addComment = () => {
    setInputValue("");
    handleInsertNode(commentData.id, inputValue);
    setShowReplyBox(false);
  };

  const deleteComment = () => {
    handleDeleteNode(commentData.id);
  };

  return (
    <div>
      <div
        className={commentData.id === 1 ? "inputContainer" : "commentContainer"}
      >
        {commentData.id === 1 ? (
          <>
            <input
              value={inputValue}
              autoFocus
              className="inputContainer__input first_input"
              onChange={({ target: { value } }) => {
                setInputValue(value);
              }}
            />
            <Action
              type="COMMENT"
              className="reply comment"
              handleClick={addComment}
            />
          </>
        ) : (
          <>
            <span style={{ wordWrap: "break-word" }}>{commentData.name}</span>
            <div style={{ display: "flex" }}>
              <Action
                type="REPLY"
                className="reply"
                handleClick={() => setShowReplyBox(true)}
              />
              <Action
                type="DELETE"
                className="reply"
                handleClick={deleteComment}
              />
            </div>
          </>
        )}
      </div>
      <div style={{ paddingLeft: "25px" }}>
        {showReplyBox && (
          <div className="inputContainer">
            <input
              className="inputContainer__input"
              autoFocus
              onChange={({ target: { value } }) => {
                setInputValue(value);
              }}
              value={inputValue}
            />
            <Action
              type="ADD"
              className="reply comment"
              handleClick={addComment}
            />
            <Action
              type="CANCEL"
              className="reply comment"
              handleClick={() => setShowReplyBox(false)}
            />
          </div>
        )}
        {commentData.items.map((cmnt) => (
          <Comments
            commentData={cmnt}
            key={cmnt.id}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
