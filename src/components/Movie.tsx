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
            return <p style={{margin: 0, fontSize: '1.25rem', fontStyle: 'italic'}}>No rating yet.</p>
        }
        var result = ''
        for(let i=0; i<review; i++){
            result += '⭐';
        }

        return <p style={{margin: 0, letterSpacing: '0.25rem'}}>{result}</p>
    }

    const moviePosterLink = posterUrl ? posterUrl : nullMovie;

    return  <div className={style.movie} onClick={() => setSeeReviews(!seeReviews)}  style={{background: `url(${moviePosterLink})`}}>
                <div className={style.moviePoster} style={!seeReviews ? {background: `url(${moviePosterLink})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {background: `transparent`}}>
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
                        </>
                    }
                </div>

                <div className={style.movieInformationContainer}>
                    <div className={style.movieInformation}>
                        <h1 className={style.movieTitle}>{title ? title : 'Not Chosen Yet'}</h1>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                            {genre &&
                                <>
                                    <p className={style.genre}>{genre}</p>
                                    <span style={{height: '2px', width: '2px', background: 'white', borderRadius: '50%'}}/>
                                </>
                            }
                            {streamingService &&
                                <>
                                    <p className={style.streamingService}>{streamingService}</p>
                                    <span style={{height: '2px', width: '2px', background: 'white', borderRadius: '50%'}}/>
                                </>
                            }
                            <p className={style.streamingService}>{date}</p>
                        </div>
                    </div>
                    <img className={style.person} src={person === 'Taylor' ? taylor : (person === 'Jose' ? jose : victor)} />
                </div>
            </div>
}