import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],


}


export const useMovieDetails = ( movieID: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {

        const movieDetailsPromise = movieDB.get<MovieFull>(`/${ movieID }`)
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieID }/credits`)

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ])

        setState({
            isLoading: false, 
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast 
        })
    }

    useEffect(() => {
        getMovieDetails()

    }, [])
    

    return{
        ...state
    }

}
