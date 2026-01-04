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

    function handleStars(review:number):string{
        var result = ''
        for(let i=0; i<review; i++){
            result += '⭐';
        }

        return result
    }
    return  <div className={style.movie}>
                {!seeReviews &&
                <>
                    <div onClick={() => taylorReview && joseReview && victorReview ? setSeeReviews(!seeReviews) : null}>
                        <img className={style.person} src={person === 'Taylor' ? taylor : (person === 'Jose' ? jose : victor)} />
                        <img className={style.moviePoster} src={posterUrl ? posterUrl : nullMovie}/>
                    </div>
                    <div className={style.movieInformation}>
                        <h1 className={style.movieTitle}>{title ? title : 'Not Chosen Yet'}</h1>
                        <h2 className={style.movieInformationText}>{genre} {genre ? '⋅' : null} {streamingService} {streamingService ? '⋅' : null} {date}</h2>
                    </div>
                </>}
                {seeReviews && taylorReview && joseReview && victorReview &&
                <>
                    <div className={style.reviewsContainer} onClick={() => setSeeReviews(!seeReviews)}>
                        <h1 className={style.reviewsContainerTitle}>Reviews</h1>
                        <h1 className={style.review}>Taylor: {handleStars(taylorReview)}</h1>
                        <h1 className={style.review}>Jose: {handleStars(joseReview)}</h1>
                        <h1 className={style.review}>Victor: {handleStars(victorReview)}</h1>
                    </div>
                    {window.innerWidth > 750 && <div className={style.movieInformation}>
                        <h1 className={style.movieTitle}>{title ? title : 'Not Chosen Yet'}</h1>
                        <h2 className={style.movieInformationText}>{genre} {genre ? '⋅' : null} {streamingService} {streamingService ? '⋅' : null} {date}</h2>
                    </div>}
                </>
                }
            </div>
}