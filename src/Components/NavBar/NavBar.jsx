import React, {useEffect} from 'react';
import style from './NavBar.module.css';
import menu from '../../assets/img/icons/menu.svg';
import search from '../../assets/img/icons/search.svg';
import {NavLink, withRouter} from "react-router-dom";
import article from '../../assets/img/icons/article.svg';

function NavBar  (props) {

let breadСrumbsArrWithoutIdCategoryAndEmptyString =  props.location.pathname.split('/').filter( url => url.length > 0 && !parseInt(url));
let categoryId = props.location.pathname.split('/').filter( url =>  parseInt(url));

  let isArticleIcon ;
  breadСrumbsArrWithoutIdCategoryAndEmptyString.forEach(url => {
    if(url === "recipes"){
      isArticleIcon =  <NavLink to={'/menu/recipes/articles/' + categoryId} title="articles"><img className={style.icon} src={article} alt="menu"/></NavLink>
    }
  });

let breadCrumbsIcon = breadСrumbsArrWithoutIdCategoryAndEmptyString.map( url => {
  switch (url) {
    case 'menu':{
      return <NavLink to={'/menu'} className={style.breadCrumbsIcon}>{'menu>>'}</NavLink>
    }
    case 'search':{
      return <NavLink to={'/search'} className={style.breadCrumbsIcon}>{'search'}</NavLink>
    }
    case 'recipes':{
      return <NavLink to={`/menu/recipes/${categoryId}`} className={style.breadCrumbsIcon}>{'recipes>>'}</NavLink>
    }
    case 'articles':{
      return <NavLink to={`/menu/recipes/articles/${categoryId}`} className={style.breadCrumbsIcon}>{'articles'}</NavLink>
    }
    default:
      return null;
  }
})
   return (
     <div className={style.navBar}>
       {breadCrumbsIcon}
       {isArticleIcon}
       <NavLink to={'/menu'} title="categories"><img className={style.icon} src={menu} alt="menu"/></NavLink>
       <NavLink to={'/search'} title="global recipes search"><img className={style.icon} src={search} alt="search"/></NavLink>
     </div>
   )
 }



export default withRouter(NavBar);