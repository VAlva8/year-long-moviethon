import style from './css/Movie.module.css'
import taylor from '../assets/tay.jpg'
import jose from '../assets/jose.jpg'
import victor from '../assets/me.jpg'
import nullMovie from '../assets/nullMovie.jpg'
import { useState } from 'react'

export interface MovieProps{
    person:string;
    title:string | null;
    date:string;
    streamingService:string | null;
    genre:string | null;
    season: string;
    posterUrl:string | null;
    taylorReview: number | null;
    joseReview: number | null;
    victorReview: number | null;
}

export default function Movie({person, title, date, streamingService, genre, posterUrl, taylorReview, joseReview, victorReview}:MovieProps){
    const [seeReviews, setSeeReviews] = useState(false)

    function handleStars(review:number | null){
        if (!review){
            return <p style={{margin: 0, fontSize: '1.25rem',color: '#434343', fontStyle: 'italic'}}>No rating yet.</p>
        }
        var result = ''
        for(let i=0; i<review; i++){
            result += '⭐';
        }

        return <p style={{margin: 0, letterSpacing: '0.25rem'}}>{result}</p>
    }
    return  <div className={style.movie} onClick={() => setSeeReviews(!seeReviews)}>
                {!seeReviews &&
                <>
                    <div>
                        <img className={style.person} src={person === 'Taylor' ? taylor : (person === 'Jose' ? jose : victor)} />
                        <img className={style.moviePoster} src={posterUrl ? posterUrl : nullMovie}/>
                    </div>
                    <div className={style.movieInformation}>
                        <h1 className={style.movieTitle}>{title ? title : 'Not Chosen Yet'}</h1>
                        <h2 className={style.movieInformationText}>{genre} {genre ? '⋅' : null} {streamingService} {streamingService ? '⋅' : null} {date}</h2>
                    </div>
                </>}
                {seeReviews &&
                <>
                    <div className={style.reviewsContainer} onClick={() => setSeeReviews(!seeReviews)}>
                        <h1 className={style.reviewsContainerTitle}>Reviews</h1>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', margin: '0 0 0.5rem'}}>
                            <h1 className={style.review}>Taylor:</h1>
                            {handleStars(taylorReview)}
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', margin: '0 0 0.5rem'}}>
                            <h1 className={style.review}>Jose:</h1>
                            {handleStars(joseReview)}
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', margin: '0 0 0.5rem'}}>
                            <h1 className={style.review}>Victor:</h1>
                            {handleStars(victorReview)}
                        </div>
                    </div>
                    {window.innerWidth > 750 && <div className={style.movieInformation}>
                        <h1 className={style.movieTitle}>{title ? title : 'Not Chosen Yet'}</h1>
                        <h2 className={style.movieInformationText}>{genre} {genre ? '⋅' : null} {streamingService} {streamingService ? '⋅' : null} {date}</h2>
                    </div>}
                </>
                }
            </div>
}