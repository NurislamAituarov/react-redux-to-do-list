const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  heroesFilter: [],
};
let index = 3;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesFilter: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HEROES_DELETED":
      const newState = state.heroes.filter((item) => item.id !== action.id);
      return {
        ...state,
        heroes: newState,
        heroesFilter: newState,
      };
    case "HEROES_ADD_LIST_ITEM":
      const newItem = {
        id: ++index,
        name: action.name,
        element: action.element,
        description: action.description,
      };
      return {
        ...state,
        heroes: [...state.heroes, newItem],
        heroesFilter: [...state.heroes, newItem],
      };
    case "HEROES_FILTER_ITEM":
      switch (action.element) {
        case "all":
          return {
            ...state,
            heroesFilter: [...state.heroes],
          };
        default:
          return {
            ...state,
            heroesFilter: state.heroes.filter(
              (el) => el.element === action.element
            ),
          };
      }
    //   return {
    //     ...state,
    //     heroes: state.heroes.filter((el) => el.element === action.element),
    //   };

    default:
      return state;
  }
};

export default reducer;
