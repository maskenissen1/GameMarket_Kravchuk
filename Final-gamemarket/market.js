// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
       {
    email: "23a_bam@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Боровий Артур",
    projectTitle: "Дід проти москалів",
    projectGithub: "https://github.com/23a-bam/Phaser2ndGame",
    projectLiveDemo: "https://23a-bam.github.io/Phaser2ndGame/",
    projectDrive: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
    projectForm: "https://forms.gle/sS7tuJWJuGDjmHB98",
    gameMarketGithub: "https://github.com/23a-bam/GameMarket_Borovyi",
    gameMarketLiveDemo: "https://23a-bam.github.io/GameMarket_Borovyi/",
    gameMarketMarketPage: "https://23a-bam.github.io/GameMarket_Borovyi/market.html"
       }
    {
        email: "23a_bam@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Боровий Артур",
        projectTitle: "Дід проти москалів",
        projectGithub: "https://github.com/23a-bam/Phaser2ndGame",
        projectLiveDemo: "https://23a-bam.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
        projectForm: "https://forms.gle/sS7tuJWJuGDjmHB98",
        gameMarketGithub: "https://github.com/23a-bam/GameMarket_Borovyi",
        gameMarketLiveDemo: "https://23a-bam.github.io/GameMarket_Borovyi/",
        gameMarketMarketPage: "https://23a-bam.github.io/GameMarket_Borovyi/market.html"
      },
      {
        email: "23a_gki@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Геча Кирило",
        projectTitle: "Магазин UkraineRog",
        projectGithub: "https://github.com/Kyrylooo/GameMarket_Surname",
        projectLiveDemo: "https://github.com/Kyrylooo/GameMarket_Surname/settings/pages",
        projectDrive: "https://kyrylooo.github.io/Test1/",
        projectForm: "https://kyrylooo.github.io/Test1/",
        gameMarketGithub: "https://github.com/Kyrylooo/Test1",
        gameMarketLiveDemo: "https://kyrylooo.github.io/Test1/",
        gameMarketMarketPage: "https://kyrylooo.github.io/Test1/"
      },
      {
        email: "23a_gmo@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Громова Марина",
        projectTitle: "",
        projectGithub: "https://github.com/Marina745/Phaser2ndGame",
        projectLiveDemo: "https://marina745.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
        projectForm: "https://forms.gle/4tsVxrHtBpkLLmdc6",
        gameMarketGithub: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
        gameMarketLiveDemo: "https://marina745.github.io/GameMarket_Hromova/market.html"
      },
      {
        email: "23a_gayu@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Гуменюк Аріна",
        projectTitle: "",
        projectGithub: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
        projectLiveDemo: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
        projectDrive: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
        projectForm: "https://forms.gle/rNroPXhu2mFSxcHx8",
        gameMarketGithub: "",
        gameMarketLiveDemo: "",
        gameMarketMarketPage: ""
      },
      {
        email: "23a_dii@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Демидчук Ілля",
        projectTitle: "",
        projectGithub: "https://github.com/zxcursed2008/Phaser2ndGame",
        projectLiveDemo: "https://zxcursed2008.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
        projectForm: "https://forms.gle/xs7rgVauTR9ryuNc7",
        gameMarketGithub: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
        gameMarketLiveDemo: "",
        gameMarketMarketPage: ""
      },
      {
        email: "23a_dyem@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Деркач Єлизавета",
        projectTitle: "Царівна жаба",
        projectGithub: "https://github.com/liska228/Phaser2ndGame",
        projectLiveDemo: "https://liska228.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
        projectForm: "https://forms.gle/XDzvrjzJhjq758XFA",
        gameMarketGithub: "https://github.com/liska228/GameMarket_Derkach-",
        gameMarketLiveDemo: "https://liska228.github.io/GameMarket_Derkach-/",
        gameMarketMarketPage: "https://liska228.github.io/GameMarket_Derkach-/market.html"
      },
      {
        email: "23a_yedv@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Євланов Данііл",
        projectTitle: "Пригоди Свинки Шмеппи 2",
        projectGithub: "https://github.com/Scoxxy/Phaser2ndGame",
        projectLiveDemo: "https://scoxxy.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_link",
        projectForm: "https://forms.gle/vWZ2hn9MopmMy5fc7",
        gameMarketGithub: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
        gameMarketLiveDemo: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/",
        gameMarketMarketPage: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html"
      },
      {
        email: "23a_bks@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Катя Булич",
        projectTitle: "Червона відьма",
        projectGithub: "https://github.com/katyablchh/Phaser2ndGame",
        projectLiveDemo: "https://katyablchh.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
        projectForm: "https://forms.gle/dxTCp9vfCCgZwyy97",
        gameMarketGithub: "https://katyablchh.github.io/Phaser2ndGame/",
        gameMarketLiveDemo: "https://katyablchh.github.io/Phaser2ndGame/",
        gameMarketMarketPage: "https://github.com/katyablchh/GameMarket_Bulych"
      },
      {
        email: "23a_kai@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Ковальов Андрій",
        projectTitle: "They alive",
        projectGithub: "https://github.com/Andre00785/Phaser1stGame",
        projectLiveDemo: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
        projectDrive: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
        projectForm: "https://forms.gle/i7YyjwzaHp7QvXei8",
        gameMarketGithub: "https://github.com/Andre00785/Game_Market_Kovalev",
        gameMarketLiveDemo: "https://andre00785.github.io/Game_Market_Kovalev/",
        gameMarketMarketPage: "https://andre00785.github.io/Game_Market_Kovalev/market.html"

        email: "23a_kyuk@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Кожанов Юрій",
        projectTitle: "Catventure",
        projectGithub: "https://github.com/kyuk278937/Catventure",
        projectLiveDemo: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
        projectDrive: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
        projectForm: "https://forms.gle/NN9okEBmpsLw3AmX8",
        gameMarketGithub: "https://github.com/kyuk278937/GameMarket",
        gameMarketLiveDemo: "https://kyuk278937.github.io/GameMarket/",
        gameMarketMarketPage: "https://kyuk278937.github.io/-HomeAppliancesStore/"
      },
      {
        email: "23a_kmo@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Козлюк Марина",
        projectTitle: "Пригоди червоної шапочки",
        projectGithub: "https://github.com/Marykozl/Phaser2ndGame",
        projectLiveDemo: "https://marykozl.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1AZzV2iit4QmQfotZM68HmWo4OjG-5ikO",
        projectForm: "https://forms.gle/PdXpRXZrbn9ujeMH7",
        gameMarketGithub: "https://github.com/Marykozl/GameMarket_Kozlyuk?hl=ru&authuser=0",
        gameMarketLiveDemo: "https://marykozl.github.io/GameMarket_Kozlyuk/",
        gameMarketMarketPage: "https://marykozl.github.io/GameMarket_Kozlyuk/market.html"
      },
      {
        email: "23a_kia@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Кравчук Іван",
        projectTitle: "Пригоди Свиноти",
        projectGithub: "https://github.com/maskenissen1/Phaser2ndGame-1",
        projectLiveDemo: "https://maskenissen1.github.io/Phaser2ndGame-1/",
        projectDrive: "https://drive.google.com/drive/folders/1_qC1jSGlqtfs16m1_nriWvomLg51Ah25",
        projectForm: "https://forms.gle/S2YEZ1dn7tYTkrbF6",
        gameMarketGithub: "https://github.com/maskenissen1/GameMarket_Kravchuk",
        gameMarketLiveDemo: "https://maskenissen1.github.io/GameMarket_Kravchuk/",
        gameMarketMarketPage: "https://maskenissen1.github.io/GameMarket_Kravchuk/market.html"
      },
      {
        email: "23a_lsa@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Лазаренко Софія",
        projectTitle: "Mavka",
        projectGithub: "https://github.com/SofiaLazarenko/Phaser2ndGame?authuser=0",
        projectLiveDemo: "https://sofialazarenko.github.io/Phaser2ndGame/?authuser=0",
        projectDrive: "https://docs.google.com/document/d/1Dqe-8TcUA1YLj7mG-2IMBxHsPmlhkwfkEfrOTAb9Nvs/edit?usp=classroom_web&authuser=0",
        projectForm: "https://forms.gle/PgJv2LH1ZJjjS29V8",
        gameMarketGithub: "https://github.com/SofiaLazarenko/GameMarket_Lazarenko?authuser=0",
        gameMarketLiveDemo: "https://sofialazarenko.github.io/GameMarket_Lazarenko/index.html",
        gameMarketMarketPage: "https://sofialazarenko.github.io/GameMarket_Lazarenko/n/market.html?authuser=0"
      },
      {
        email: "23a_kiv@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Кайданюк Ілля",
        projectTitle: "Пригоди Свинки Шмеппи 3",
        projectGithub: "https://github.com/Nefenix/Phaser2ndGame",
        projectLiveDemo: "https://nefenix.github.io/Phaser2ndGame/",
        projectDrive: "https://drive.google.com/drive/folders/1xlqWdx6uMj_5XWDlfl4EYZtAD6A8LGMq?usp=drive_link",
        projectForm: "https://forms.gle/e4camX4k2MZvK9qf7",
        gameMarketGithub: "https://github.com/Nefenix/GameMarket_Kaidaniuk",
        gameMarketLiveDemo: "https://nefenix.github.io/GameMarket_Kaidaniuk/",
        gameMarketMarketPage: "https://nefenix.github.io/GameMarket_Kaidaniuk/market.html"
      }
      
      
       
    
    
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