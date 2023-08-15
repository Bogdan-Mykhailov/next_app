import {useEffect, useState} from 'react';

import s from './Comments.module.css';
import NewComment from "@/components/input/NewComment/NewComment";
import CommentList from "@/components/input/CommentList/CommentList";

function Comments(props) {
  const {eventId} = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then(res => res.json())
        .then(data => {
          setComments(data.comments);
        })
    }
  }, [showComments]);


  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);


  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <section className={s.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler}/>}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
