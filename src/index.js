import { refs } from "./scripts/refs";

const createLi = (text) => `<li data-id='${text}'>${text}</li>`;

const addLiToList = (markup) => {
  refs.list.insertAdjacentHTML('beforeEnd', markup);
};

const onSubmit = (e) => {
  e.preventDefault();
  const value = refs.input.value;
  const liItem = createLi(value);
  addLiToList(liItem);
  refs.input.value = '';
};

refs.form.addEventListener("submit", onSubmit);


// storage => ['test']
// 1) Прочитати сторедж
// 2) Перетворити в масив з JSON
// 3) Запушити в масив нові данні
// 4) Конвертувати новий масив в JSON
// 5) Записати новий JSON в сторедж
