const categories = [...document.querySelector('#categories').children]

console.log(`Number of categories: ${categories.length}`)
categories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
  console.log(`Elements: ${item.lastElementChild.children.length}`)
})
