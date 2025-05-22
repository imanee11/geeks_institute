let input = document.getElementById('onlyLetters')

input.addEventListener('input' , function(){
    this.value = this.value.replace(/[^a-zA-Z]/g, '')
})