import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    /* const [images, setImages] = useState([])
    //Funci'on para que el componente solo se renderice una vez
    useEffect( () => {
        getGifs( category )
            .then( setImages )
    }, [ category ]) */

    //usamos el customhook
    const { data:images, loading } = useFetchGifs( category );

     
    return (
        <>
         <h3>{ category }</h3>
         { loading && <p>Loading</p>}
        <div className="card-grid">
           
                {
                    images.map( img => (
                      <GifGridItem 
                         key = { img.id }
                         { ...img }
                      />
                    ))
                }               
        </div>
        </>
    )
}
