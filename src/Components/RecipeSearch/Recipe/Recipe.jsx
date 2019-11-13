import  React from  'react';
import  style from './Recipe.module.css';
import  dish from '../../../assets/img/dish.png';

const Recipe = ({title, image, ingredients}) => {

  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li >{ingredient.text}</li>
        ))}
      </ol>
      <img src={image || dish} alt="img" className={style.img}/>
    </div>
  )
}

export default Recipe;