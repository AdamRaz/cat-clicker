let cat1 = document.querySelector('.cat-img-1');
let cat2 = document.querySelector('.cat-img-2');
let counter1 = document.querySelector('.clicker-counter-1');
let counter2 = document.querySelector('.clicker-counter-2');
let catName1 = "Bob"
let catName2 = "Lisa";
let catNameCard1 = document.querySelector('.cat-name-1');
catNameCard1.textContent = catName1;

let catNameCard2 = document.querySelector('.cat-name-2');
catNameCard2.textContent = catName2;


let clicks1 = 0;
let clicks2 = 0;

function clicked1(event) {
    console.log("cat 1 clicked!")
    clicks1++;
    counter1.textContent = `cat clicks: ${clicks1}`;
}

function clicked2(event) {
    console.log("cat 2 clicked!")
    clicks2++;
    counter2.textContent = `cat clicks: ${clicks2}`;
}

cat1.addEventListener('click', clicked1);
cat2.addEventListener('click', clicked2);


/*
*
* OLD code above, scalable code below
*
*/

//necessary separate code

//image addresses

//basic html setup

//cat names

//declare cat objects
class Cat {
    constructor(name, imageUrl) {
      this.name = name;
      this.counter = 0;
      this.image = imageUrl;
      this.elementRef;
      this.counterRef;
    }
    // this is explictly added to each plane object
  
    dummyFunction() {
      console.log(`${this.name} object is here`);
    }
  }

  let espeonUrl = "img/espeon-2.jpg"
  let umbreonUrl = "img/umbreon.png"
  let persianUrl = "img/persian.png"
  let purrloinUrl = "img/purrloin.png"
  let eeveeUrl = "img/eevee-1.png"
  let liepardUrl = "img/liepard.webp"

  let catObjects = [];
  catObjects[0] = new Cat("espeon", espeonUrl);
  catObjects[1] = new Cat("umbreon", umbreonUrl);
  catObjects[2] = new Cat("persian", persianUrl);
  catObjects[3] = new Cat("purrloin", purrloinUrl);
  catObjects[4] = new Cat("eevee", eeveeUrl);

  let catHtml = document.querySelector('.catBase');
  let catSection = document.querySelector('.cat-clicker-container');


//   catObjects.push(catObject1);
//   catObject1.dummyFunction();
for (let i = 0; i < catObjects.length; i++) {
    catObjects[i].dummyFunction();

    let catDiv = document.createElement('div');
    catDiv.setAttribute('class', 'cat');
    
    let catHead = document.createElement('p');
    catHead.setAttribute('class', 'cat-name');
    catHead.textContent=`${catObjects[i].name}`

    let catImage = document.createElement('img');
    catImage.setAttribute('class', 'cat-img');
    catImage.setAttribute('src', `${catObjects[i].image}`);
    catImage.setAttribute('alt', `picture of a ${catObjects[i].name}`);

    let catCounter = document.createElement('p');
    catCounter.setAttribute('class', 'clicker-counter');
    catCounter.textContent = "Cat clicks: 0";

    catDiv.appendChild(catHead);
    catDiv.appendChild(catImage);
    catObjects[i].counterRef = catDiv.appendChild(catCounter);
    catObjects[i].elementRef = catSection.appendChild(catDiv);
    console.log(catObjects[i].elementRef);
}

// for each object, loop an array of objects?
let counter = 0;
for (let i = 0; i < catObjects.length; i++) {
    catObjects[i].elementRef.addEventListener('click', (function(counterCopy){
        return function() {
            counterCopy++;
            console.log(counterCopy);
            catObjects[i].counterRef.textContent = `Cat clicks: ${counterCopy}`;
        }
    })(counter));
}
