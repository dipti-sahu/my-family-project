import React from 'react'
import style from './contact.module.css'
import Image from 'next/image';

const A=()=>{
 return(
    
    <div className={`text-center container ${style.clr}`}><h3>Contact</h3>
  <div className={`row ${style.r}`}>
    <div className="col-sm-4">
     <Image src='/papa2.jpeg' height={250} width={250} ></Image>
    </div>
    <div className="col-sm-4">
    <Image src='/maa.jpeg' height={250} width={250} ></Image>
    </div>
    <div className="col-sm-4">
    <Image src='/aishu.jpeg' height={250} width={250} ></Image>
    </div>
  </div>
  <div className={`row ${style.r}`}>
    <div className="col-sm-4">
     <Image src='/dip.jpeg' height={250} width={250} ></Image>
    </div>
    <div className="col-sm-4">
    <Image src='/trisha.jpeg' height={250} width={250} ></Image>
    </div>
    <div className="col-sm-4">
    <Image src='/pappu.jpg' height={250} width={250} ></Image>
    </div>
  </div>
</div>
 ) 
};
export default A ;