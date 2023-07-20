import React from 'react';
import Link from "next/link";

import s from './Button.module.css';

const Button = ({children, link, callback}) => {
  if (link) {
    return (
      <Link href={link} className={s.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={s.btn}
      onClick={callback}
    >
      {children}
    </button>
  )
};

export default Button;
