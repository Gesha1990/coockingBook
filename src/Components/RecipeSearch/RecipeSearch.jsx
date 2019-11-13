import React, {useEffect, useState} from 'react';
import style from './RecipeSearch.module.css'
import Recipe from "./Recipe/Recipe";
import Loader from "../Common/Loader";
import {connect} from 'react-redux'
import {searchGlobalRecipesThunkCreator} from "../../redux/menuCategoryReducer";

const RecipeSearch = (props) => {


  const [search, setSearch] = useState('');
  const [food, setFood] = useState('chicken');

  useEffect(() => {
    props.searchGlobalRecipesThunkCreator(food)
  }, [food]);

  //
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setFood(search)
    setSearch('')
  }

  return (
    <div>
      {!props.isLoaded ? <Loader/> : null}
      <form className={style.searchForm} onSubmit={onSubmit}>
        <input className={style.searchBar} type="text" value={search} onChange={onChange} placeholder={'write a food'}/>
        <button className={style.searchButton} type="submit">Search</button>
      </form>
      <div className={style.recipes}>
        {props.globalRecipes.map(recipe => <Recipe title={recipe.recipe.label}
                                       calories={recipe.recipe.calories}
                                       image={recipe.recipe.image}
                                       ingredients={recipe.recipe.ingredients}
                                       key={recipe.recipe.totalWeight}/>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    globalRecipes: state.menuCategories.globalRecipes,
    isLoaded: state.menuCategories.isLoaded
  }
}
export default connect(mapStateToProps, {searchGlobalRecipesThunkCreator})(RecipeSearch);