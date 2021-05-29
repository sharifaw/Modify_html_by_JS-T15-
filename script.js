const nav = document.querySelector('nav');

const link1 = nav.insertAdjacentHTML("afterbegin",'<a href="#">Link 1</a>');

const link2 = nav.querySelectorAll('a')[2].insertAdjacentHTML('afterend','<a href="#">Link 4</a>');

const link7 = nav.insertAdjacentHTML("beforeend",'<a href="#">Link 7</a>');

const h1 = document.querySelector('h1').innerHTML = 'Main Content Here';

//function changingColor(color) {}

const main = document.querySelector('main');

for (let i = 1; i < main.children.length ; i++) 
{
    
    main.children[i].style.color= "purple";
}

const aside = document.querySelector('aside');

const p1 = aside.children[0];
p1.innerHTML = "<h4>Title 1</h4> <p>comment 1</p>";
p1.style.color = "red";

const p2 = aside.children[1];
p2.innerHTML = "<h4>Title 2</h4> <p>comment 2</p>";
p2.style.color = "blue";

const p3 = aside.children[2];
p3.innerHTML = "<h4>Title 3</h4> <p>comment 3</p>";
p3.style.color = "green";


alert(p3.previousElementSibling.innerHTML)