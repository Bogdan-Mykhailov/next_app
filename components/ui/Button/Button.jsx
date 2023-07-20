import React from 'react';
import Link from "next/link";

import s from './Button.module.css';

const Button = ({children, link}) => {
  return (
    <Link href={link} className={s.btn}>
      {children}
    </Link>
  );
};

export default Button;
