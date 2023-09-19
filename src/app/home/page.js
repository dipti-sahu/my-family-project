import React from 'react'
import style from './home.module.css'
 import Image from 'next/image';
const A=()=>{
 return(
 <div className='text-center container'><h3 className={style.m}><mark className={style.m1}>Home</mark></h3>
 <div className='row'>
    <div className={`col-sm-6 ${style.dv}`}>“My family is my life, and everything else comes second as far as what’s important to me.”
         <div className={`row ${style.dv1}`}>Family is the most cherished gift from God that plays a crucial role in shaping the personality of a person. 
         You can trust your family members to be there with you at all walks of life. From love, moral teachings and support, your family
          will assist you without any demand. The support your family provides instill a sense of mental peace deep within.
          Family is your best support that you can wish for. They will be there with you throughout the ups and downs in life and will 
          love you without any self-interests.</div>
    </div>
    <div className={`col-sm-6 ${style.img}`}>
   <Image src='/f2.jpg' height={400} width={500}></Image>
    </div>
 </div>
 </div>
 ) 
};
export default A ;