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

function serviceColors(service: string): { color: string; background: string } {
    switch (service.toLocaleLowerCase()) {
        case 'amazon prime':   return { color: '#FF9900', background: '#1a1200' };
        case 'disney+':        return { color: '#00A8E0', background: '#001a2e' };
        case 'hbo max':        return { color: '#0063E5', background: '#00102e' };
        case 'hulu':           return { color: '#1CE783', background: '#0a1a0f' };
        case 'netflix':        return { color: '#E50914', background: '#1a0a0a' };
        case 'paramount+':     return { color: '#1674EA', background: '#041229' };
        case 'peacock':        return { color: '#7B2FBE', background: '#140a1f' };
        case 'tubi':           return { color: '#F5A623', background: '#1a1200' };
        case 'youtube':        return { color: '#FF3000', background: '#1a0800' };
        default:               return { color: '#9E9EB8', background: '#14141f' };
    }
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

    return  <div className={style.movie} onClick={() => setSeeReviews(!seeReviews)}>
                <div className={style.moviePoster} style={!seeReviews ? {background: `url(${moviePosterLink})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {background: `transparent`, boxShadow: 'none'}}>
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
                        <div className={style.titleService}>
                            <h1 className={style.movieTitle}>{title ? title : 'Not Chosen Yet'}</h1>
                            {streamingService && (() => {
                                const { color, background } = serviceColors(streamingService);
                                return (
                                    <p
                                        className={style.streamingService}
                                        style={{ color, backgroundColor: background }}
                                    >
                                        {streamingService}
                                    </p>
                                );
                            })()}
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                            {genre &&
                                <>
                                    <p className={style.genre}>{genre}</p>
                                    <span style={{height: '2px', width: '2px', background: 'var(--text-body)', borderRadius: '50%'}}/>
                                </>
                            }
                            <p className={style.genre}>{date}</p>
                        </div>
                    </div>
                    <img className={style.person} src={person === 'Taylor' ? taylor : (person === 'Jose' ? jose : victor)} />
                </div>
            </div>
}