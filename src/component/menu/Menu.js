import React from 'react';
import style from './menu.module.css'
import Link from 'next/link'

export const Menu = () => {
  return (
    <div className={style.nav}>
       <ul className={style.menu}>
        <li><u><Link href='/home'>Home</Link></u></li>
        <li ><u><Link href='/about'>About</Link></u></li>
        <li><u><Link href='/contact'>Contact</Link></u></li>
      </ul>
     
    </div>
  );
}

