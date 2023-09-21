import React from 'react'
import style from './about.module.css'
import Image from 'next/image';

const About=()=>{
 return(
   <div className={`text-center container ${style.dv}`}>
  <h3><marquee width="30%" className={style.mar}>About My Family</marquee></h3>
  <div className={`row ${style.dv1}`}>
    <div className="col-sm-6">
      <p><b>Mom and Dad:</b>My Mom and Dad are my best friends. They are always there for us, no matter what the situation is. 
      They have been through everything with us, and they always been there to help us out.  In return, we owe them our utmost respect and gratitude.
       There are many things that we can learn from our parents. For example, they know how to balance work and family life.</p>
    </div>
    <div className="col-sm-6">
    <Image src='/parent.jpg' height={150} width={300}></Image>
    </div>
  </div>
  <div className={`row ${style.dv1}`}>
    <div className="col-sm-6">
      <p><b>Brother and Sister:</b>Most brother sister relationships have love. Even through all the constant rivalry, arguing and competition.
       You know you cannot live without them. I constantly argue with my brother, but when someone else picks on him or starts arguing with
        him I always stand up for him. I’m the type of person that says,” Only I can make fun of him!” What can I say? I love my brother.</p>
    </div>
    <div className="col-sm-6">
    <Image src='/bs.jpg' height={150} width={300}></Image>
    </div>
  </div>
</div>
 ) 
};
export default About ;