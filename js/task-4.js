const form = document.querySelector('.login-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const email = e.currentTarget.elements.email.value.toLowerCase().trim()
  const password = e.currentTarget.elements.password.value.toLowerCase().trim()
  if (email === '' || password === '')
    return alert('All form fields must be filled in')

  e.currentTarget.reset()
  return console.log({ email, password })
})
