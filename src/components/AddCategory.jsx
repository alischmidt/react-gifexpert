import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState(''); //valor inicial del input value
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length<=1)return; //trim para eliminar espacios
        
        onNewCategory(inputValue.trim());
        //setCategories(categories =>[...categories, inputValue]);
        setInputValue(''); //para limpiar el textbox
    }

    return(

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>

        
    )

}