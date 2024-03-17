//Iterate overall for loops (for, for in, for of, for each)

const myDetails = {
    "name": "Muthuselvi Tamizhventhan",
    "email": "muthuselvitamizh@gmail.com",
    "phone": "+91 904153970",
    "degree": "BCA",
    "location": "Chennai"
    }

const keys = Object.keys(myDetails);


// for loop

for(let i=0; i<keys.length; i++){
console.log(keys[i] + ":" + myDetails[keys[i]])
}

// for in

for (let i in myDetails) 
{
console.log(i+" : "+myDetails[i]);
}

// for of

for (let i of keys) {
console.log(i+" : "+myDetails[i]);
}

// forEach

keys.forEach(b =>{console.log(`${b} : ${myDetails[b]}`)})