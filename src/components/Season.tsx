import { useState, type PropsWithChildren } from 'react';
import style from './css/Season.module.css'
import toggleArrow from '../assets/toggleArrow.svg'

interface MyComponentProps extends PropsWithChildren {
  season: string;
  color: string;
  initialToggle: boolean;
}

export default function Season({ season, color, initialToggle, children }: MyComponentProps){
    const [toggle, setToggle] = useState(initialToggle)
    return  <div className={style.seasonContainer}>
                <div className={style.seasonNameContainer} onClick={() => setToggle(!toggle)}>
                    <h1 className={style.seasonName} style={{color: color}}>{season}</h1>
                    <hr className={style.lineDivider}/>
                    <img src={toggleArrow} style={toggle ? {height: '0.75rem', transform: 'rotate(90deg)'}: {height: '0.75rem'}} />
                </div>
                {toggle && <div className={style.movieGrid}>
                    {children}
                </div>}
            </div>
}