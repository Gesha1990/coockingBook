import * as axios from "axios/index";

const instance = axios.create({
  baseURL: "https://test-task-server.herokuapp.com/api/v1/"
});

export const menuCategoryAPI = {
  getAllCategories() {
    return instance.get('category/all')
      .then(response => response.data)
  },
  postCategory(title) {
    return instance.post('category/create', {title: title})
  },
  deleteCategory(id) {
    return instance.delete(`category/${id}`)
  },
  updateCategory(id, title2) {
    return instance.put('category/update', {
      _id: id,
      title: title2,
      parentId: '5daacce338cf9404007d92a4'
    })
  }
};

export const menuRecipesAPI = {
  getRecipesList(id) {
    return instance.get(`recipe/byCategory/${id}`)
      .then(response => response.data)
  },
  postRecipe(title, text = 'write some recipe here',  categoryId) {
    return instance.post('recipe/create', {
      title: title,
      text: text,
      categoryId: categoryId
    })
  },
  updateRecipe (id, title, text, categoryId) {
    return instance.put('recipe/update', {
      _id: id,
      title: title,
      text: text,
      categoryId: categoryId
    })
  },
  deleteRecipe(id) {
    return instance.delete(`recipe/${id}`)
  }
};

export const menuArticleAPI = {
  getArticlesList(id) {
    return instance.get(`article/byCategory/${id}`)
      .then(response => response.data)
  },
  postArticle(title, text = 'write some article here', description = 'some description', categoryId) {
    return instance.post('article/create', {
      title: title,
      text: text,
      description:description,
      categoryId: categoryId
    })
  },
  updateArticle (id, title, text, description, categoryId) {
    return instance.put('article/update', {
      _id: id,
      title: title,
      text: text,
      description:description,
      categoryId: categoryId
    })
  },
  deleteArticle(id) {
    return instance.delete(`article/${id}`)
  }
}

export const getGlobalRecipes = async (food) => {
  const APP_ID = "5a8bb987";
  const API_KEY = "03b5472e880dbe4f3a04804e656c2189";
  const response = await  fetch(`https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${API_KEY}`)
  const data = await response.json()
  return data.hits
};

