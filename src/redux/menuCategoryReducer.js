import {menuCategoryAPI, menuRecipesAPI, menuArticleAPI, getGlobalRecipes} from "../api/api";

const ADD_ALL_CATEGORIES = 'ADD-ALL-CATEGORIES';
const ADD_ALL_RECIPES = 'ADD-ALL-RECIPES';
const ADD_ALL_ARTICLES = 'ADD-ALL-ARTICLES';
const ADD_GLOBAL_RECIPES = 'ADD-GLOBAL-RECIPES';


let initialState = {
  categoriesOfMenu: [],
  recipesOfMenu: [],
  articlesOfMenu: [],
  globalRecipes:[],
  isLoaded: false
};

const menuCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_CATEGORIES: {
      return {
        ...state,
        categoriesOfMenu: [...action.categories],
        isLoaded: action.isLoaded,
        isCategory: action.isCategory
      }
    }
    case ADD_ALL_RECIPES: {
      return {
        ...state,
        recipesOfMenu: [...action.recipes],
        isLoaded: action.isLoaded
      }
    }
    case ADD_ALL_ARTICLES: {
      return {
        ...state,
        articlesOfMenu: [...action.articles],
        isLoaded: action.isLoaded
      }
    }
    case ADD_GLOBAL_RECIPES: {
      return {
        ...state,
        globalRecipes: [...action.globalRecipes],
        isLoaded: action.isLoaded
      }
    }
    default:
      return state;
  }
}

export const addAllCategoriesAC = (categories) => ({type: ADD_ALL_CATEGORIES, categories, isLoaded: true, isCategory: true});
export const addAllRecipesAC = (recipes) => ({type: ADD_ALL_RECIPES, recipes, isLoaded: true});
export const addAllArticleAC = (articles) => ({type: ADD_ALL_ARTICLES, articles, isLoaded: true});
export const addGlobalRecipesAC = (globalRecipes) => ({type: ADD_GLOBAL_RECIPES, globalRecipes, isLoaded: true});

export const getAllMenuCategoriesThunkCreator = () => {
  return (dispatch) => {
    menuCategoryAPI.getAllCategories()
      .then(data => {
        dispatch(addAllCategoriesAC(data))
      })
  }
};
export const postMenuCategoryThunkCreator = (title) => {
  return (dispatch) => {
    menuCategoryAPI.postCategory(title)
      .then(data => {
        dispatch(getAllMenuCategoriesThunkCreator())
      })
  }
};
export const deleteMenuCategoryThunkCreator = (id) => {
  return (dispatch) => {
    menuCategoryAPI.deleteCategory(id)
      .then(data => {
        if (data.status === 200) {
          dispatch(getAllMenuCategoriesThunkCreator())
        }
      })
  }
};
export const updateMenuCategoryThunkCreator = (id, title2) => {
  return (dispatch) => {
    menuCategoryAPI.updateCategory(id, title2)
      .then(data => {
        if (data.status === 200) {
          dispatch(getAllMenuCategoriesThunkCreator())
        }
      })
  }
};




export const getMenuRecipesThunkCreator = (id) => {
  return (dispatch) => {
    menuRecipesAPI.getRecipesList(id)
      .then(data => {
        dispatch(addAllRecipesAC(data))
      })
  }
};

export const postRecipeMenuThunkCreator = (title, text,  categoryId) => {
  return (dispatch) => {
    menuRecipesAPI.postRecipe(title, text,  categoryId)
      .then(data => {
        dispatch(getMenuRecipesThunkCreator(categoryId))
      })
  }
};
export const updateRecipeMenuThunkCreator = (id, title, text, categoryId) => {
  return (dispatch) => {
    menuRecipesAPI.updateRecipe(id, title, text, categoryId)
      .then(data => {
        dispatch(getMenuRecipesThunkCreator(categoryId))
      })
  }
};
export const deleteMenuRecipeThunkCreator = (id, categoryId) => {
  return (dispatch) => {
    menuRecipesAPI.deleteRecipe(id)
      .then(data => {
        console.log(data)
        dispatch(getMenuRecipesThunkCreator(categoryId))
      })
  }
};



export const getMenuArticlesThunkCreator = (categoryId) => {
  return (dispatch) => {
    menuArticleAPI.getArticlesList(categoryId)
      .then(data => {
        dispatch(addAllArticleAC(data))
      })
  }
};

export const postArticleMenuThunkCreator = (title, text,  description, categoryId) => {
  return (dispatch) => {
    menuArticleAPI.postArticle(title, text,description, categoryId)
      .then(data => {
        dispatch(getMenuArticlesThunkCreator(categoryId))
      })
  }
};
export const updateArticleMenuThunkCreator = (id, title, text, description, categoryId) => {
  return (dispatch) => {
    menuArticleAPI.updateArticle(id, title, text, description, categoryId)
      .then(data => {
        dispatch(getMenuArticlesThunkCreator(categoryId))
      })
  }
};
export const deleteArticleMenuThunkCreator = (id, categoryId) => {
  return (dispatch) => {
    menuArticleAPI.deleteArticle(id)
      .then(data => {
        dispatch(getMenuArticlesThunkCreator(categoryId))
      })
  }
};

export const searchGlobalRecipesThunkCreator = (food) => {
  return (dispatch) => {
    getGlobalRecipes(food)
      .then(data => {
        dispatch(addGlobalRecipesAC(data))
      })
  }
};

export default menuCategoryReducer;