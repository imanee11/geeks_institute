let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades) {
        resolve("I will get a gift");
    } else {
        reject("I won't get the gift");
    }
});
console.log(endSemester);
