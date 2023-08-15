import s from './NewsletterRegistration.module.css';
import {useContext, useRef} from "react";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();

  const context = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    context.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending'
    })

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({email: enteredEmail}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then(data => {
          throw new Error(data.message || 'Something went wrong!');
        })
      })
      .then((data) => context.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter!',
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
    <section className={s.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={s.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
