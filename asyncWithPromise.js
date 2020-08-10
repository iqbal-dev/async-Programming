// const P1 = new Promise((resolve, reject) => {
//     setTimeout(resolve,3000,'One')
// })
// P1.then((v) => {
//     console.log(v);
// }).catch((e) => {
//     console.log(e);
// })

// function getIphone(isPassed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPassed) {
//                 resolve('I have got Iphone');
//             } else {
//                 reject(new Error('you have got failed'));
//             }
//       },3000)
//     })
// }

// getIphone(false)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data=>console.log(data))
//     .catch(e => console.log(e))

function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const response = JSON.parse(xhr.response);
            resolve(response);
        } else {
            reject(new Error('Error occurred'));
        }
      }
    };

    xhr.send();
  });
}
getRequest('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        res.map(value=>console.log(`name : ${value.name} id : ${value.id}`))
    })
    .catch(error => console.log(error))

