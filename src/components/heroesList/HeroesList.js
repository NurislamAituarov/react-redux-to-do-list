import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createSelector } from "reselect";

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../../actions";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";
import "./heroesList.css";
// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
  const heroesFilter = useSelector((state) => {
    if (state.heroesElementFilter === "all") {
      console.log("render");
      return state.heroes;
    } else {
      return state.heroesFilter.filter((item) => {
        return item.element === state.heroesElementFilter;
      });
    }
  });

  const { heroesLoadingStatus } = useSelector(
    (state) => state.heroesLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, []);

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={0} className="my-node">
          <h5 className="text-center mt-5">Героев пока нет</h5>
        </CSSTransition>
      );
    }

    return arr.map(({ id, ...props }) => {
      return (
        <CSSTransition key={id} timeout={1000} classNames="my-node">
          <HeroesListItem key={id} {...props} id={id} dispatch={dispatch} />
        </CSSTransition>
      );
    });
  };

  const elements = renderHeroesList(heroesFilter);
  return <TransitionGroup components="ul">{elements}</TransitionGroup>;
};

export default HeroesList;
