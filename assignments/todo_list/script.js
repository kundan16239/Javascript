const Completed = document.querySelector("#completed");
const result = document.querySelector("#todos");
const Uncompleted = document.querySelector("#uncompleted");
const getCompletedData = function() {
    fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
        .then((res) => res.json())
        .then((data) => {
            result.innerText = JSON.stringify(data, null, 2);
        })
        .catch((error) => console.log(error));
};
Completed.addEventListener("click", getCompletedData);
const getUncompletedData = function() {
    fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
        .then((res) => res.json())
        .then((data) => {
            result.innerText = JSON.stringify(data, null, 2);
        })
        .catch((error) => console.log(error));
};
Uncompleted.addEventListener("click", getUncompletedData);