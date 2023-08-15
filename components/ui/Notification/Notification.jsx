import { useContext } from 'react';

import s from './Notification.module.css';
import NotificationContext from "@/store/notification-context";


export const Notification = props => {
  const context = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = s.success;
  }

  if (status === 'error') {
    statusClasses = s.error;
  }

  if (status === 'pending') {
    statusClasses = s.pending;
  }

  const activeClasses = `${s.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={context.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
