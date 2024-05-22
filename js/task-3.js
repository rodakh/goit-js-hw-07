const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', e => {
  const value = e.currentTarget.value.trim()
  const outputValue = value === '' ? 'Anonymous' : value
  output.textContent = outputValue
})
