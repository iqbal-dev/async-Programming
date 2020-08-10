


async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json();
    data.map(value => console.log(value.id, value.title,value.body))
    console.log(data);
}
fetchData()