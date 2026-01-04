import { useState, type PropsWithChildren } from 'react';
import style from './css/Season.module.css'
import toggleArrow from '../assets/toggleArrow.svg'

interface MyComponentProps extends PropsWithChildren {
  season: string;
}

export default function Season({ season, children }: MyComponentProps){
    const [toggle, setToggle] = useState(true)
    return  <div className={style.seasonContainer}>
                <div className={style.seasonNameContainer} onClick={() => setToggle(!toggle)}>
                    <h1 className={style.seasonName}>{season}</h1>
                    <hr className={style.lineDivider}/>
                    <img src={toggleArrow} style={toggle ? {height: '0.75rem', transform: 'rotate(90deg)'}: {height: '0.75rem'}} />
                </div>
                {toggle && <div className={style.movieGrid}>
                    {children}
                </div>}
            </div>
}