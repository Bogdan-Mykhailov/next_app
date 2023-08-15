import React, {useContext} from 'react';
import Header from "@/components/layout/Header/Header";
import {NotificationContext} from "@/store/notification-context";
import Notification from "@/components/ui/Notification/Notification";

const Layout = ({children}) => {

  const context = useContext(NotificationContext);

  const activeNotification = context.notification

  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />)}
    </>
  );
};

export default Layout;
