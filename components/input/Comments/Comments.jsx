import {useContext, useEffect, useState} from 'react';

import s from './Comments.module.css';
import NewComment from "@/components/input/NewComment/NewComment";
import CommentList from "@/components/input/CommentList/CommentList";
import NotificationContext from "@/store/notification-context";

function Comments(props) {
  const {eventId} = props;

  const context = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    setIsFetchingComments(true);
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then(res => res.json())
        .then(data => {
          setComments(data.comments);
          setIsFetchingComments(false);
        })
    }
  }, [showComments]);


  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    context.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is currently being stored in to database.',
      status: 'pending'
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then(data => {
          throw new Error(data.message || 'Something went wrong!');
        })
      })
      .then(data => context.showNotification({
        title: 'Success!',
        message: 'Your comment was saved!',
        status: 'success'
      })).catch((err) => {
      context.showNotification({
        title: 'Error!',
        message: err.message || 'Something went wrong!',
        status: 'error'
      })
    })
  }

  return (
    <section className={s.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler}/>}
      {showComments && !isFetchingComments && <CommentList items={comments}/>}
      {showComments && isFetchingComments && <p>Loading...</p>}
      </section>
  );
}

export default Comments;
