const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    const h1 = root.createElement("h1");
    h1.innerText = "FREELANCERS";
    root.appendChild(h1);
    const ul = root.createElement("ul");
    //each name is the heading of a new unordered list with their age and occupation
    /*
    <ul>
        <li>users.name is users.age and works as a users.occupation.</li>
            
    </ul>
    */
    for (i=0; i<users.length; i++){
        let li = root.createElement("li");
        li.innerText = `${users[i].name} is ${users[i].age} and works as a ${users[i].occupation}.`
        ul.appendChild(li);
    }
    root.appendChild(ul);
}

//call the main function
main();