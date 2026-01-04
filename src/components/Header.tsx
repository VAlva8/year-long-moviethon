import style from './css/Header.module.css'
import sheets from '../assets/sheets.svg'

export default function Header(){


    return  <div className={style.header}>
                <h1 className={style.headerText}>🍿 <b style={{fontWeight: '600'}}>2026</b> Moviethon</h1>
                <a href='https://docs.google.com/spreadsheets/d/1XIpzIGpvJGH0hK83JXPKmOcLpBkXFAuhTIZbiYVfQv8/edit?usp=sharing' className={style.sheetsLink}><img src={sheets} className={style.sheetsIcon}/></a>
            </div>
}