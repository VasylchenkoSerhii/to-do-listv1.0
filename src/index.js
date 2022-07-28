import { refs } from "./scripts/refs";
import { createLi, addLiToList } from "./scripts/generateMarkup";
import { storage } from "./helpers/storage";

const handleMount = () => {
  const list = storage.readItem('list', []);
  const markUp = list.reduce((acc, text) => acc + createLi(text), '');
  addLiToList(markUp);

};

const onSubmit = (e) => {
  e.preventDefault();
  const value = refs.input.value;
  if (value === '') {
    return;
  }
  const liItem = createLi(value);
  addLiToList(liItem);

  const result = storage.readItem('list', []);
  result.push(value);
  storage.addItem('list', result);
  refs.input.value = '';
};
 
refs.form.addEventListener("submit", onSubmit);
addEventListener('DOMContentLoaded', handleMount)


// storage => ['test']
// 1) Прочитати сторедж
// 2) Перетворити в масив з JSON
// 3) Запушити в масив нові данні
// 4) Конвертувати новий масив в JSON
// 5) Записати новий JSON в сторедж
