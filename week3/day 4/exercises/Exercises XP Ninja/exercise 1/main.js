//& Create a function called calculateTip() that takes no parameter.

const calculateTip = () => {

    //? Create a variable called billAmount that fetches the value of the input
    let billAmount = document.getElementById('billamt').value;
    console.log(billAmount);

    //? Create a variable called serviceQuality that fetches the value of the input
    let serviceQuality = document.getElementById('serviceQual').value;
    console.log(serviceQuality);

    //?Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople
    let numberOfPeople = document.getElementById('peopleamt').value;
    console.log(numberOfPeople);

    //? If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
    if (billAmount === "" || serviceQuality == 0) {
        alert("pls enter the bill amount and select a service quality");
        return;
    }

    let each = document.getElementById("each");
    if (numberOfPeople === '' || numberOfPeople < 1) {
        numberOfPeople = 1
        each.style.display = 'none'
    }else {
        each.style.display = "inline";
    }

    //? Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)
    let total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2);
    console.log(total);

    //? Add the CSS property “display:block” to the tag which id is totalTip.
    let totalTip = document.getElementById('totalTip')
    totalTip.style.display = 'block'

    //?Display the variable total in the tag which id is tip.
    let tip = document.getElementById('tip')
    tip.innerText = total
    
}

// document.getElementById("calculate").addEventListener("click", calculateTip);
