//Стики хэдер
window.addEventListener('scroll', function() {
  const header = document.querySelector('header')
  header.style.transform = 'translateY(' + window.scrollY + 'px)'
})

//Скролл к нужным пунктам
const linkRates = document.getElementById(1).addEventListener('click', scrollToBlocks)
const linkRules = document.getElementById(2).addEventListener('click', scrollToRules)

function scrollToBlocks(event) {
  event.preventDefault();
  const blocksContainer = document.getElementById('rates')
  window.scrollTo({
    top: blocksContainer.offsetTop,
    behavior: 'smooth'
  })
}

function scrollToRules(event) {
  event.preventDefault();
  const rulesContainer = document.querySelector('.rules_container')
  window.scrollTo({
    top: rulesContainer.offsetTop,
    behavior: 'smooth'
  })
}

//Кнопка вверх
const firstHeading = document.querySelector('h1')
const scrollUpLink = document.createElement('a')
scrollUpLink.href = '#'
scrollUpLink.textContent = 'ВВЕРХ'
scrollUpLink.classList.add('btn_up', 'hidden')
document.body.appendChild(scrollUpLink)
window.addEventListener('scroll', () => {
  const bounding = firstHeading.getBoundingClientRect()
  if (bounding.top < 0) {
    scrollUpLink.classList.remove('hidden')
  } else {
    scrollUpLink.classList.add('hidden')
  }
})
scrollUpLink.addEventListener('click', (event) => {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

//Дата добавления
const blocks = document.querySelectorAll('.block')
blocks.forEach(block => {
  const currentDate = getCurrentDate()
  const dateElement = document.createElement('p')
  dateElement.classList.add('date')
  dateElement.textContent = `Добавлено: ${currentDate}`
  block.appendChild(dateElement)
});
function getCurrentDate() {
  const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
  const now = new Date()
  const dayOfWeek = weekdays[now.getDay()]
  const weekNumber = Math.ceil(now.getDate() / 7)
  const monthName = months[now.getMonth()]
  const year = now.getFullYear()
  return `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${year}г`
}

//Форма
function openForm(id) {
  const form = document.createElement('form');
  form.classList.add('buy-form');
  form.innerHTML = `
    <label for="quantity" class="title_form">Количество:</label>
    <input type="number" name="quantity" id="quantity" min="1" max="3" required>
    <br>
    <label class="title_form">Цвет:</label>
    <br>
    <label for="red">Красный</label>
    <input type="radio" name="color" value="red" id="red">
    <label for="green">Зеленый</label>
    <input type="radio" name="color" value="green" id="green">
    <label for="blue">Синий</label>
    <input type="radio" name="color" value="blue" id="blue">
    <br>
    <label for="comment" class="title_form">Комментарий:</label>
    <textarea name="comment" id="comment" rows="4" maxlength="2000"></textarea>
    <br>
    <div class="btns_form_container">
      <button type="submit">Купить</button>
      <button type="button" onclick="closeForm()">Закрыть</button>
    </div>
  `;
  document.body.appendChild(form);
  const closeButton = form.querySelector('button[type="button"]');
  closeButton.addEventListener('click', closeForm);
}

function closeForm() {
  const form = document.querySelector('.buy-form');
  document.body.removeChild(form);
}

const buttons = document.querySelectorAll('.btn_buy');
buttons.forEach(button => {
  const id = button.getAttribute('id');
  button.addEventListener('click', () => {
    openForm(id);
  });
});
