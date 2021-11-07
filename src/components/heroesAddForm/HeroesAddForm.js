import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { heroesAddListItem } from '../../actions';
import { counterAction } from '../../actions';

const HeroesAddForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [element, setElement] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(heroesAddListItem(name, element, text));
    setName('');
    setText('');
    setElement('');
  };

  return (
    <>
      <form onSubmit={onSubmit} className="border p-4 shadow-lg rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">
            Имя нового героя
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value.replace(/\d/g, ''));
            }}
            required
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Как меня зовут?"
            value={name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label fs-4">
            Описание
          </label>
          <textarea
            onChange={(e) => setText(e.target.value)}
            required
            name="text"
            className="form-control"
            id="text"
            placeholder="Что я умею?"
            style={{ height: '130px' }}
            value={text}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="element" className="form-label">
            Выбрать элемент героя
          </label>
          <select
            onChange={(e) => setElement(e.target.value)}
            required
            className="form-select"
            id="element"
            name="element"
            value={element}>
            <option>Я владею элементом...</option>
            <option value="fire">Огонь</option>
            <option value="water">Вода</option>
            <option value="wind">Ветер</option>
            <option value="earth">Земля</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Создать
        </button>
      </form>
    </>
  );
};

export default HeroesAddForm;
