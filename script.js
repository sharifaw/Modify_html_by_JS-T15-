//select the nav element
const nav = document.querySelector('nav');

// add an anchor link 1 element as a first child of a nav element
const link1 = nav.insertAdjacentHTML("afterbegin",'<a href="#">Link 1</a>');

// add an anchor link4 as a sibling of link3
const link4 = nav.querySelectorAll('a')[2].insertAdjacentHTML('afterend','<a href="#">Link 4</a>');

// add an anchor link7 as a last child of a nav element
const link7 = nav.insertAdjacentHTML("beforeend",'<a href="#">Link 7</a>');

// changing the h1 content
const h1 = document.querySelector('h1').innerHTML = 'Main Content Here';

// select main element
const main = document.querySelector('main');

// make a function for changing text colors
function changingColor (elements) 
{
    for (let element = 1; element < elements.children.length ; element++) 
    {

        elements.children[element].style.color= "purple";
    }
}
changingColor(main);

// select aside element
const aside = document.querySelector('aside');

// modify paragraphs 
const p1 = aside.children[0];
p1.innerHTML = "<h4>Title 1</h4> <p>comment 1</p>";
p1.style.color = "red";

const p2 = aside.children[1];
p2.innerHTML = "<h4>Title 2</h4> <p>comment 2</p>";
p2.style.color = "blue";

const p3 = aside.children[2];
p3.innerHTML = "<h4>Title 3</h4> <p>comment 3</p>";
p3.style.color = "green";