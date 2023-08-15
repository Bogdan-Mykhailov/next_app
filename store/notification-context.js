import {createContext, useState} from "react";

export const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {
  },
  hideNotification: () => {
  }
});

export const NotificationContextProvider = ({children}) => {
  const [activeNotification, setActiveNotification] = useState();

  const handleNotificationShow = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const handleNotificationHide = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: handleNotificationShow,
    hideNotification: handleNotificationHide
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
};

export default NotificationContext;
