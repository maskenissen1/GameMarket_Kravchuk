// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [


    
    {
        name: "Електрична Мотокоса 12 MS",
        price: "5499",
        discountPrice: "4497",
        couponPrice: "4395",
        photo: "https://hotline.ua/img/tx/319/3193450945.jpg"
    },
    {
        name: "Електричний тример 4 Limit",
        price: "4497",
        discountPrice: "3498",
        couponPrice: "3396",
        photo: "https://vitals.ua/image/cache/catalog/demo/sad-park/ezt-033s/ezt-033s-4-1000x1000.jpg"
    },
    {
        name: "Електрична газонокосарка 9",
        price: "4497",
        discountPrice: "3297",
        couponPrice: "3195",
        photo: "https://machtz.com.ua/files/resized/products/000024307_5be968a4-80ad-4b5b-b7ca-f04e9b0d4452-800x800.1800x1800w.jpg"
    },
    {
        name: "Ручний Оприскувач Limit 81",
        price: "2190",
        discountPrice: "1698",
        couponPrice: "1596",
        photo: "https://hecht.ua/content/images/18/478x480l50nn0/95145173888325.jpg"
    }  ,
       


//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
    
]
// Отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");
// Перевірка існування знайденого блоку 
if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
            <div class="bober">
                <div class="item-title">${item.name}</div>
                
            </div>
            

            <p><img src="${item.photo}" " class="item-image"></p>

            <div class="parts-pay">
            <div><img src="img-market/mono-lapka.png" alt="">6</div>
            <div><img src="img-market/pb.png" alt="">8</div>
            </div>

            <div class="prise">
            <div><span>${item.price}</span><sup>грн</sup></div>
            <div><span>${item.discountPrice}</span><sup>грн</sup></div>
            
            </div>

            <div class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.couponPrice}</span><sup>грн</sup></div>
            </div>
        </div>`
    


      
    });
} else {
    // Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено');
}































// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item,index) =>{
//     console.log(index + '-й елемент:',item)
// })
// //Сортування масиву
// itemsArray = itemsArray.sort()
// // Виведення в консоль масиву
// console.log(itemsArray)
// //Виведення в консоль елементів масиву
// for(let i = 0; i<itemsArray.length; i++){
//     console.log(itemsArray[i])
// }
// //Виведення в коносль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент: ', itemsArray[i])
// }
// Початковий показ вчителів
// displayTeachers(itemsArray);

// function displayTeachers(teachers) {
//     let sortedTeachers = teachers.slice(); // Клонування масиву
//     itemsDiv.innerHTML = ''; // Очистити вміст контейнера

//     sortedTeachers.forEach((teacher, index) => {
//         itemsDiv.innerHTML +=
//             `<div class="item">
//                 <h2>Вчитель № ${index + 1} з ${sortedTeachers.length}</h2>
//                 <p>${teacher.lastName} ${teacher.firstName}</p>
//                 <p><img src="${teacher.photo}" alt="${teacher.lastName} ${teacher.firstName}" class="item-image"></p>
//                 <p>Вік: ${teacher.age} </p>
//                 <p>Предмет: ${teacher.subject} </p>
//                 <p>Освіта: ${teacher.education} </p>
//                 <p>Звання: ${teacher.rank} </p>
//                 <p><a href="${teacher.url}" target="_blank">Профіль</a></p>
//             </div>`;
//     });
// }

// function sortByAge() {
//     let sortedByAge = itemsArray.slice().sort((a, b) => parseInt(a.age) - parseInt(b.age));
//     displayTeachers(sortedByAge);
// }

// function sortByLastName() {
//     let sortedByLastName = itemsArray.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
//     displayTeachers(sortedByLastName);
// }

// function sortBySubject() {
//     let sortedBySubject = itemsArray.slice().sort((a, b) => a.subject.localeCompare(b.subject));
//     displayTeachers(sortedBySubject);
// }