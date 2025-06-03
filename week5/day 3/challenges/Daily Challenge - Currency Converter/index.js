let from = document.getElementById('from');
let to = document.getElementById('to');
let amount = document.getElementById('amount');
let result = document.getElementById('result');
let convertBtn = document.getElementById('convert');
let switchBtn = document.getElementById('switch');

const API_KEY = 'bede6680f2af1cc6e8fc3c23'

async function loadCurrencies () {
    const res = await fetch (`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
    const data = await res.json()
    const currencies = data.supported_codes;
    
    from.innerHTML = ''
    to.innerHTML = ''
    currencies.forEach(([code , name]) => {
        const option = `<option value="${code}">${code} - ${name}</option>`;
        from.innerHTML += option
        to.innerHTML += option
    })

    from.value = 'USD'
    to.value = 'EUR'
}

async function convertCurrency () {
    const fromVal = from.value
    const toVal = to.value
    const amt =  amount.value

    if (!amt) {
        result.textContent = 'pls enter an amount'
        return;
    }

    const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromVal}/${toVal}/${amt}`)
    const data = await res.json()

    if (data.result === "success") {
        result.textContent = `${amt} ${fromVal} = ${data.conversion_result.toFixed(2)} ${toVal}`;
    } else {
        result.textContent = 'Conversion failed'
    }
}

convertBtn.addEventListener('click' , convertCurrency)

switchBtn.addEventListener('click' , () => {
    const temp = from.value
    from.value = to.value
    to.value = temp
    convertCurrency()
})

loadCurrencies()
