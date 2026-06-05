import { useState } from 'react';
import style from './css/Header.module.css'
import type { MovieProps } from './Movie';
import { HamburgerIcon, XIcon } from './Icon';

interface HeaderProps{
    data: MovieProps[];
}

export default function Header({data}:HeaderProps){
    const [toggleMenu, setToggleMenu] = useState(false)

    return  <div className={style.header}>
                <h1 className={style.headerText}>🍿 <b style={{fontWeight: '600'}}>2026</b> Moviethon</h1>
                <div className={style.headerIcon} onClick={() => setToggleMenu(!toggleMenu)}>
                    <HamburgerIcon color='var(--text-body)'/>
                </div>
                <div className={style.headerMenu} style={!toggleMenu ? {display: 'none'} : {}}>
                    <div className={style.headerMenuHeader}>
                        <h1 className={style.headerMenuTitle}>Menu</h1>
                        <div className={`${style.headerIcon} ${style.headerMenuIcon}`} onClick={() => setToggleMenu(!toggleMenu)}>
                            <XIcon color='var(--text-body)'/>
                        </div>
                    </div>
                    <MenuHeading heading='Excel Sheet'>
                        <a href='https://docs.google.com/spreadsheets/d/1XIpzIGpvJGH0hK83JXPKmOcLpBkXFAuhTIZbiYVfQv8/edit?usp=sharing' className={style.sheetsLink}>Link to Excel sheet</a>
                    </MenuHeading>
                    <MenuHeading heading='Movie Pick Standings'>
                        <ReturnStandings data={data} />
                    </MenuHeading>
                </div>
            </div>
}

interface MenuHeadingProps{
    heading: string;
    children: React.ReactNode;
}

function MenuHeading({heading, children}:MenuHeadingProps){
    return(
        <div className={style.section}>
            <h1 className={style.sectionHeading}>{heading}</h1>
            <div className={style.sectionChildren}>
                {children}
            </div>
        </div>
    );
}

interface Person{
    name: string;
    movies: MovieProps[];
    avg: string;
}

function ReturnStandings({data}:HeaderProps){

    let people = ['Taylor', 'Jose', 'Victor']

    let personArr: Person[] = people.map((person: string) => ({
        name: person,
        movies: data.filter((movie:MovieProps) => movie.person === person),
        avg: ''
    }));

    for(let person of personArr){
        let personAvg = 0;
        let movieCount = 0;

        for(let movie of person.movies){
            if(movie.taylorReview && movie.joseReview && movie.victorReview){
                movieCount ++
                let tempAvg = Number(movie.taylorReview) + Number(movie.joseReview) + Number(movie.victorReview)
                personAvg += tempAvg / 3
            }
        }

        person.avg = (personAvg / movieCount).toFixed(2)
    }

    return(
        <>
            {personArr.map((person:Person) => 
                <div className={style.person} key={`person-stat-${person.name}`}>
                    <p className={style.personName}>{person.name}:</p>
                    <p className={style.personAvg}>{person.avg}</p>
                </div>
            )}
        </>
    );
}