export function categoryRequest() {
  return {
    type: '@category/CATEGORY_REQUEST',
  };
}

export function categorySuccess(categories) {
  return {
    type: '@category/CATEGORY_SUCCESS',
    payload: { categories },
  };
}

export function categoryNewRequest(title) {
  return {
    type: '@category/CATEGORY_NEW_REQUEST',
    payload: { title },
  };
}

export function categoryNewSuccess(category) {
  return {
    type: '@category/CATEGORY_NEW_SUCCESS',
    payload: { category },
  };
}

export function categoryDeleteRequest(id) {
  return {
    type: '@category/CATEGORY_DELETE_REQUEST',
    payload: { id },
  };
}
