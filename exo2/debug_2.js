let main = document.getElementById('main');

main.id = "main2";

main.style.display = "hidden";

document.getElementById('main').innerHTML = "Mon nouveau texte !";

let html = main

alert(html);

if(html) {
    console.log(html);
}
else {
    let test = document.getElementById('test');
    if(test) {
        alert(test);
    }
}



main.style.display = "block";


