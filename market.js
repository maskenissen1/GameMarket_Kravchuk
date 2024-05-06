console.log(`прірврврврвр`)

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    console.log(itemsDiv)

console.log('Поле classlist:' , itemsDiv.classList)
console.log('Поле id: ', itemsDiv.id)
console.log('Поле clientWight: ', itemsDiv.clientWidth)
console.log('Поле innetHTML: ', itemsDiv.innerHTML)

itemsDiv.innerText = 'Програмно доданий текст'
itemsDiv.innerText += 'Другий програмно доданий текст'

itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
} else {
    console.log(`Блок товарін не знайдено`)
}