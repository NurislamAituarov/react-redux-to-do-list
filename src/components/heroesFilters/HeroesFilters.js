// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { heroesFilterItem } from "../../actions";
import { useDispatch } from "react-redux";

const HeroesFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button
            onClick={() => dispatch(heroesFilterItem("all"))}
            className="btn btn-outline-dark active"
          >
            Все
          </button>
          <button
            onClick={() => dispatch(heroesFilterItem("fire"))}
            className="btn btn-danger"
          >
            Огонь
          </button>
          <button
            onClick={() => dispatch(heroesFilterItem("water"))}
            className="btn btn-primary"
          >
            Вода
          </button>
          <button
            onClick={() => dispatch(heroesFilterItem("wind"))}
            className="btn btn-success"
          >
            Ветер
          </button>
          <button
            onClick={() => dispatch(heroesFilterItem("earth"))}
            className="btn btn-secondary"
          >
            Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
