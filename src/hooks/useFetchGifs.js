import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
  //los edectos no pueden ser async porque esperan algo asincrono
    useEffect( () => {
        
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs, 
                    loading: false
                });
            })

    }, [category])
     
    return state; //{data:[], loading: true};

}
