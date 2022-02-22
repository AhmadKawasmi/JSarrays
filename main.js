const arr1 = ['Ahmad', 'Ibrahim', 'Bahaa', 'Khaled', 'Yazzed', 'Adam', 'Insherah', 'Haneen']

const sayHello = function(givenArr) {
    for (let i = 0; i < givenArr.length; i++) {
        console.log("Hello " + givenArr[i]);
    }
}

// sayHello(arr1)

const formatArr = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "Hello " + arr[i]
    }
}

// formatArr(arr1)
// console.log(arr1);

const names = "ahmad issa mohannad omar ibrahem bahaa".split(' ')


const toUpper = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase()
    }
}

toUpper(names)
console.log(names);


const arr2 = ['Ahmad', 'Ibrahim', 'Bahaa', 'Khaled', 'Yazzed', 'Adam', 'Insherah', 'Haneen']
console.log(arr2);
arr2.push('Sameer')
arr2.push('Rami')
arr2.splice(3, 1, 'suad', 'sameera')
const newArr = arr2.slice(2, arr2.length)
console.log(arr2);
console.log(newArr);

const user = {
    firstName: "Ahmad",
    lastName: "Kawasmi",
    age: 18,
    isLoggedIn: false,
    signIn: function() {
        this.isLoggedIn = true
    },
    signOut: function() {
        this.isLoggedIn = false
    }
}
user.mobileNumber = '0543367608'
user.signIn()
console.log(user);


const users = [{
        firstName: 'Ahmad',
        lastName: 'Kawasmi',
        userName: 'AhmadKawasmi',
        passWord: '276609',
        age: 18,
        isLoggedIn: false,
        signIn: function() {
            this.isLoggedIn = true
        },
        signOut: function() {
            this.isLoggedIn = false
        }
    },
    {
        firstName: 'Ibrahim',
        lastName: 'Safadi',
        userName: 'Pabbda',
        passWord: '1234',
        age: 18,
        isLoggedIn: false,
        signIn: function() {
            this.isLoggedIn = true
        },
        signOut: function() {
            this.isLoggedIn = false
        }
    },
    {
        firstName: 'Bahaa',
        lastName: 'Jawabreh',
        userName: 'AbuAlDodeem',
        passWord: '1234',
        age: 18,
        isLoggedIn: false,
        signIn: function() {
            this.isLoggedIn = true
        },
        signOut: function() {
            this.isLoggedIn = false
        }
    },
    {
        firstName: 'Khaled',
        lastName: 'Amro',
        userName: 'Khokho',
        passWord: '1234',
        age: 18,
        isLoggedIn: false,
        signIn: function() {
            this.isLoggedIn = true
        },
        signOut: function() {
            this.isLoggedIn = false
        }
    },

]

const findUser = (userName) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].userName == userName) {
            return users[i]
        }
    }
    return { err: true, msg: 'Cant Find User Ya Fucker' }
}

const signInByUserName = (userName, passWord) => {
    const user = findUser(userName)
    if (user.err) {
        alert(user.msg)
        return
    } else if (user.passWord === passWord) {
        user.signIn()
        return user
    } else {
        alert('wrong Password')
    }
}