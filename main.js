const arr1 = ['Ahmad', 'Ibrahim', 'Bahaa', 'Khaled', 'Yazzed', 'Adam', 'Insherah', 'Haneen']

const sayHello = function(givenArr) {
    for (let i = 0; i < givenArr.length; i++) {
        console.log("Hello " + givenArr[i]);
    }
}

sayHello(arr1)

const formatArr = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "Hello " + arr[i]
    }
}

formatArr(arr1)
console.log(arr1);