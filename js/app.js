const courses = [
    { id: 1, price: 100, title: "HTML", duration: "3 men.", about: "Pati pradzia" },
    { id: 2, price: 200, title: "CSS", duration: "2 men.", about: "Jau toliau" },
    { id: 3, price: 300, title: "BOOTSTRAP", duration: "2 sav.", about: "Truputi dar toliau" },
    { id: 4, price: 400, title: "JS", duration: "5 men.", about: "Prasideda idomumas" },
    { id: 5, price: 500, title: "REACT", duration: "2 m.", about: "Jau gali eiti i produkcija" }
];

for (let i=0;i<courses.length;i++){
    const ul=document.createElement('ul');
    ul.textContent="- "+courses[i].title;
    document.querySelector('body').appendChild(ul);

    const numeriukas=document.createElement('li');
    numeriukas.textContent="-- "+courses[i].id+" nr.";
    ul.appendChild(numeriukas)

    const apie=document.createElement('li');
    apie.textContent="-- "+courses[i].about;;
    ul.appendChild(apie);

    const kaina=document.createElement('li');
    kaina.textContent="-- "+courses[i].price+" eur";
    ul.appendChild(kaina);

    const trukme=document.createElement('li');
    trukme.textContent="-- "+courses[i].duration
    ul.appendChild(trukme)
}
