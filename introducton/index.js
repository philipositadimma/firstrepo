var intro = "hello world 11 ";

console.log(intro);
// alert(intro);
// document.write(intro);

intro = 1000;

// document.getElementById("second").innerHTML = intro;

let myname = "david xp"
myname = "gift joy"

const mylikes = "be very wealthy and healthy";

console.log(mylikes)

let ans = 2 + 3;

ans = ans + 5;

console.log(ans);

let result = 10;
result = result + 70;
result = result + 10;

result = result +100
result++;
result = result + 10.2;
result %= 10;
result = result /5;

console.log(result)
let firstname = "obi";
let secondname = "david";
let surname = "ene";


let id = "david" + " ada";

console.log(id);

function addnum(num1, num2) {
    return num1 + num2;
}

let sum = 20 + addnum(40,50);
addnum(3,6);

console.log(sum)

function converting(num) {
    let converted = (5 / 9) * (num / 32);
    return converted;
}

let student = {first: "david", last: "peter", age: 18, level: "final year",regular: true, otherdetials: {addres: "unn", married: false},
fullname: function() {
    return this.first + this.last;

}
};



student.level = "first year"

console.log(student["name"]);
console.log(student.level);

console.log(student["age"]);
console.log(student.fullname());

console.log(converting(100));
console.log(student.otherdetials ["addres"]);
console.log(student.otherdetials.addres);

let myname2 = `david is an instructor in digital dreams`


let myname1 ='david';

let firstletter = myname1 = 'david'[2];
console.log(firstletter);

let sep = myname2.split(" ");
console.log(sep);
