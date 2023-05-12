window.addEventListener('scroll', function() {
  const header = document.querySelector('header')
  header.style.transform = 'translateY(' + window.scrollY + 'px)'
})

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