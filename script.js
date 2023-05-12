window.addEventListener('scroll', function() {
  const header = document.querySelector('header')
  header.style.transform = 'translateY(' + window.scrollY + 'px)'
})

const linkRates = document.getElementById(1).addEventListener('click', scrollToBlocks)
const linkRules = document.getElementById(2).addEventListener('click', scrollToRules)

function scrollToBlocks() {
  const blocksContainer = document.getElementById('rates')
  window.scrollTo({
    top: blocksContainer.offsetTop,
    behavior: 'smooth'
  })
}

function scrollToRules() {
  const rulesContainer = document.querySelector('.rules_container')
  window.scrollTo({
    top: rulesContainer.offsetTop,
    behavior: 'smooth'
  })
}