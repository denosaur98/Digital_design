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
