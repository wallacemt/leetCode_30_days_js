const addTwoPromisses = async (pr1, pr2) => {
    return Promise.all([pr1, pr2])
        .then(([result1, result2]) => result1 + result2);
}

let promisse1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
let promisse2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromisses(promisse1, promisse2).then(result => console.log(result));

let promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50)); 
let promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30)); 

addTwoPromisses(promise3, promise4).then(result => console.log(result));