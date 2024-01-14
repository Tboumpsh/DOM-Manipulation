/*
about us project💫

 Name of the programmer:
1- Fateme Satouri

project name :
Strengthening the problem

Project description:
This project is used to manipulate livestock.
Using HTML without a trap, I tried to add elements to my page.
And we style it using CSS.

start date:
january 9

end of the project:
january 10

email:navayearamm@gmail.com
 */
// create grand parent div | Inside it is the first two children and a few grandchildren
let div = document.createElement("div");
div.id = "grandparent";
document.body.append(div);
// Building the first child from the right
let divChR = document.createElement("div");
divChR.id = "parentR";
div.append(divChR);
// Building the first child from the left
let divChL = document.createElement("div");
divChL.id = "parentL";
div.append(divChL);
// create div in divChL and divChR by function
function creatNode(mtTag, myText, myId, target) {
  let element = document.createElement(mtTag);
  element.id = myId;
  target.append(element);
  element.textContent = myText;
  return element;
}
// Build 4 children. With repeated calling the function
creatNode("div", " ", "childeone", divChR);
creatNode("div", " ", "childeTwo", divChR);
creatNode("div", " ", "childeThree", divChR);
creatNode("div", " ", "childeFour", divChR);
creatNode("div", " ", "childeTen", divChL);
creatNode("div", " ", "childeNine", divChL);
creatNode("div", " ", "childeEight", divChL);
creatNode("div", " ", "childeSeven", divChL);
creatNode("div", " ", "childeSix", divChL);
creatNode("div", " ", "childeFive", divChL);

// Add text in divisions
// add text by hover in div 8
childeEight.addEventListener("mouseenter", function () {
  childeEight.classList.add("showText");
  childeEight.innerText =
    'شب‌های تحویل پروژه را گذرانده‌ایم "\n" و ما را به خرکاری خود  این گمان نبود';
});

childeEight.addEventListener("mouseleave", function () {
  childeEight.classList.remove("showText");
  childeEight.textContent = " ";
});

// add text by hover in div 1
childeone.addEventListener("mouseenter", function () {
  childeone.classList.add("showT");
  childeone.innerText =
    'روزی فکر میکردم برنامه نویسی قدرتمندم"\n" امروز میبینم اسیر باگ ‌هایی هستم که خودم خلق کرده‌ام';
});

childeone.addEventListener("mouseleave", function () {
  childeone.classList.remove("showT");
  childeone.textContent = " ";
});
// add text by hover in div 4
childeFour.addEventListener("mouseenter", function () {
  childeFour.classList.add("showT");
  childeFour.innerText = "پوچ هستم جـــــانم ";
});

childeFour.addEventListener("mouseleave", function () {
  childeFour.classList.remove("showT");
  childeFour.textContent = " ";
});
// add text by hover in div 10
childeTen.addEventListener("mouseenter", function () {
  childeTen.classList.add("showT");
  childeTen.innerText = "اگر من انتخاب شدم استاد باید دوره‌ی شبکه برگزار کند";
});

childeTen.addEventListener("mouseleave", function () {
  childeTen.classList.remove("showT");
  childeTen.textContent = " ";
});
// add text by hover in div 2
childeTwo.addEventListener("mouseenter", function () {
  childeTwo.classList.add("showT");
  childeTwo.innerText = "برنده‌ی پرداخت ۱۰۰ هزار تومان وجه نقد شدید";
});

childeTwo.addEventListener("mouseleave", function () {
  childeTwo.classList.remove("showT");
  childeTwo.textContent = " ";
});
// add text by hover in div 9
childeNine.addEventListener("mouseenter", function () {
  childeNine.classList.add("showT");
  childeNine.innerText = "دنبال چی هستی جدا؟";
});

childeNine.addEventListener("mouseleave", function () {
  childeNine.classList.remove("showT");
  childeNine.textContent = " ";
});
// add text by hover in div 3
childeThree.addEventListener("mouseenter", function () {
  childeThree.classList.add("showT");
  childeThree.innerText = 'بابا آب داد "\n" داد NAN JS ';
});

childeThree.addEventListener("mouseleave", function () {
  childeThree.classList.remove("showT");
  childeThree.textContent = " ";
});
// add text by hover in div 7
childeSeven.addEventListener("mouseenter", function () {
  childeSeven.classList.add("showT");
  childeSeven.innerText =
    "با امدن موست روی این دیو تا فردا ۵ خبر خوب به تو میرسد";
});

childeSeven.addEventListener("mouseleave", function () {
  childeSeven.classList.remove("showT");
  childeSeven.textContent = " ";
});

// add text by hover in div 6
childeSix.addEventListener("mouseenter", function () {
  childeSix.classList.add("showT");
  childeSix.innerText =
    ' میدونید حافظه‌های رم چیو به عنوان حیوون خونگی نگهداری میکنند؟ "\n" هیپو';
});

childeSix.addEventListener("mouseleave", function () {
  childeSix.classList.remove("showT");
  childeSix.textContent = " ";
});
// add text by hover in div 5
childeFive.addEventListener("mouseenter", function () {
  childeFive.classList.add("showT");
  childeFive.innerText =
    "به دلیل کمبود متن این دیو تا اطلاع ثانوی در دسترس است";
});

childeFive.addEventListener("mouseleave", function () {
  childeFive.classList.remove("showT");
  childeFive.textContent = " ";
});
