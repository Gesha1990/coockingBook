import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import MenuContainer from "./Components/MenuList/MenuContainer";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch";
import RecipesContainer from "./Components/RecipesContainer/RecipesContainer";
import ArticlesContainer from "./Components/ArticlesContainer/ArticlesContainer";




function App() {

  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/menu/' render={() => <MenuContainer/>}/>
      <Route exact path='/menu/recipes/:categoryId?' render={() => <RecipesContainer/>}/>
      <Route exact path='/menu/recipes/articles/:categoryId?' render={() => <ArticlesContainer/>}/>
      <Route path='/search' render={() => <RecipeSearch/>}/>
    </div>
  );
}

export default App;
