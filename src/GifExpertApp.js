import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    
    const [categories, setCategories] = useState(['One Punch'])

    /* const handleAdd = () => {
        //cuando usamos setcategories le estamos cayendo encima al estado anterior y esta creando un nuevo estado asi no se agrega elementos al array
        //por eso utiizamos el operador spread ... y a;adimos la nueva categoria
        //setCategories( [...categories,'HunterxHunter'] );
        setCategories( cats => [ ...cats, 'HunterXHunter']);

    } */
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr/>
            
            <ol>
                {
                    categories.map( category => 
                       <GifGrid 
                       key = { category}
                       category = { category }
                       />
                    )
                }
            </ol>
        </div>
    )
}
