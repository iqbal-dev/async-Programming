

const P1 = new Promise((resolve, reject) => {
    setTimeout(resolve,3000,'One')
})
P1.then((v) => {
    console.log(v);
}).catch((e) => {
    console.log(e);
})


function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have got Iphone');
            } else {
                reject(new Error('you have got failed'));
            }
      },3000)
    })
}

getIphone(false)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error.message);
    })