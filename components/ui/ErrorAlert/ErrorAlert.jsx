import s from './ErrorAlert.module.css';

function ErrorAlert({ children }) {
  return <div className={s.alert}>{children}</div>;
}

export default ErrorAlert;
