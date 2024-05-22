const boxes = document.getElementById('boxes')
const input = document.querySelector('input[type="number"]')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

// prettier-ignore
function createBoxes(amount) {
  const items = []
  for (let i = 0; i < amount; i++) {
    items.push(
      `<div style="width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px; background-color: ${getRandomHexColor()}"></div>`
    )
  }
  input.value = ""
  return items
}

function destroyBoxes() {
  boxes.innerHTML = ''
  input.value = ''
}

createBtn.addEventListener('click', () => {
  if (Number(input.value) > 1 && Number(input.value) < 100) {
    boxes.innerHTML = ''
    boxes.insertAdjacentHTML('beforeend', createBoxes(input.value).join(''))
  }
})

destroyBtn.addEventListener('click', () => {
  destroyBoxes()
})
