import React, {useState} from 'react';
import style from './Category.module.css';
import remove from '../../../assets/img/icons/remove.svg';
import edit from '../../../assets/img/icons/edit.svg';
import {NavLink} from "react-router-dom";

const Category = (props) => {
  const [category, setCategory] = useState(props.title)
  const [editMode, setEditMode] = useState(false)

  const removeCategory = () => {
    props.deleteMenuCategoryThunkCreator(props.id)
  };

  const editCategory = () => {
    if (editMode === false) {
      setEditMode(true)
    }

  };

  const deactivateEditMode = (event) => {
    props.updateMenuCategoryThunkCreator(props.id, category,)
    setEditMode(false);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value)
  }
  return (
    <li className={style.listItem} id={props.id}>
      {editMode ? <input type="text" className={style.field} value={category} onChange={onChangeCategory}
                         onBlur={deactivateEditMode} autoFocus={true}/> :
        <NavLink className={style.navLink} to={'menu/recipes/' + props.id}>
          <div className={style.title}>{props.title}</div>
        </NavLink>}
        < div >
        < img src={edit} alt="edit" className={style.icon} onClick={editCategory}/>
        <img src={remove} alt="remove" className={style.icon} onClick={removeCategory}/>
        </div>
        </li>

        )
      }

      export default Category;