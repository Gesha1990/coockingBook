import React, {useState} from 'react';
import  style from './MyRecipe.module.css';
import  dish from '../../../assets/img/dish.png';
import remove from '../../../assets/img/icons/remove.svg';
import edit from '../../../assets/img/icons/edit.svg';
import save from '../../../assets/img/icons/save.svg';

const MyRecipe = (props) => {

  const [recipeTitle, setRecipeTitle] = useState(props.title)
  const [recipeText, setRecipeText] = useState(props.text)
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
      setEditMode(true)
  };

  const deactivateEditMode = () => {
    props.updateRecipeMenuThunkCreator(props.id, recipeTitle, recipeText,  props.categoryId)
    setEditMode(false);
  };
const editRecipeTitle = (event) => {
  setRecipeTitle(event.target.value)
};
  const editRecipeText = (event) => {
    setRecipeText(event.target.value)
  };
  const removeRecipe = () => {
    props.deleteMenuRecipeThunkCreator(props.id, props.categoryId )
  }

  return (
    <form onSubmit={props.handleSubmit} className={style.formEditing}>
      <div className={style.recipe}>
        {editMode? <input type='textarea' className={style.titleField} value={recipeTitle} onChange={editRecipeTitle} maxLength="30"/> : <h1 className={style.title}>{props.title}</h1>}
        < div  className={style.editIcons}>
          {editMode? <img src={save} alt="save" className={style.icon} onClick={deactivateEditMode}/> : <img src={edit} alt="edit" className={style.icon} onClick={activateEditMode}/> }
          <img src={remove} alt="remove" className={style.icon} onClick={removeRecipe}/>
        </div>
        {editMode? <textarea  className={style.textField} onChange={editRecipeText} value={recipeText}/> : <div className={style.text}>{props.text}</div>}
        <img src={dish} alt="img" className={style.img}/>
      </div>
    </form>

  )
}

export default MyRecipe;