//api_key = 'dfRYehIb4d3Vku7aygsxndzTXPePNm4X';

import { useState } from "react";
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]); //para agregar un item a la categoria
        //setCategories(cat => [...cat, 'HelloKitty']); //spread , desestructuración de categorias
        //console.log(newCategory);
    }
    return (
        <>

            <h1>GifExpertApp</h1>

            
            <AddCategory 

                onNewCategory={event => onAddCategory(event)} //on:  emite algo
            />

            
                {categories.map((category) => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        ))
                }
                
            


        </>
   )
}

export default GifExpertApp;
