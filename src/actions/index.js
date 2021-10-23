export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const heroesDeleted = (id) => {
  return {
    type: "HEROES_DELETED",
    id,
  };
};

export const heroesAddListItem = (name, element, description) => {
  return {
    type: "HEROES_ADD_LIST_ITEM",
    name,
    element,
    description,
  };
};

export const heroesFilterItem = (element) => {
  return {
    type: "HEROES_FILTER_ITEM",
    element,
  };
};
