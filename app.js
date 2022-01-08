class PasswordGenerator {

  constructor(){
    this.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.lower = 'abcdefghijklmnopqrstuvwxyz';
    this.number = '0123456789';
    this.symbol = '!@#$%&*-_+=';
    this.lengthPw = document.getElementById('len').value;
  }

  upperLetters() {
    return this.upper[Math.floor(Math.random() * this.upper.length)];
  }

  lowerLetters() {
    return this.lower[Math.floor(Math.random() * this.lower.length)];
  }

  numbers (){
    return this.number[Math.floor(Math.random() * this.number.length)];
  }

  symbols (){
    return this.symbol[Math.floor(Math.random() * this.symbol.length)];
  }

  generatePwValues(pwValueArray, upperEl, lowerEl, numberEl, symbolEl) {

    pwValueArray = [];

    upperEl = document.getElementById('upper');
    lowerEl = document.getElementById('lower');
    numberEl = document.getElementById('number');
    symbolEl = document.getElementById('symbol');

    if(upperEl.checked){
      pwValueArray.push(this.upperLetters())
    }
    if(lowerEl.checked){
      pwValueArray.push(this.lowerLetters())
    }
    if(numberEl.checked){
      pwValueArray.push(this.numbers())
    }
    if(symbolEl.checked){
      pwValueArray.push(this.symbols())
    }
    if(pwValueArray.length === 0) return "";

    return pwValueArray[Math.floor(Math.random() * pwValueArray.length)];
  }

  generatePassword (password, pwValueArray) {
    password = '';
    
    for(let i = 0; i < this.lengthPw; i++){
      pwValueArray = this.generatePwValues();
      password += pwValueArray;
    }

    return password;
  }

}

/*
*****************
  CONTROLLER
*****************  
*/
const passwordEl = document.getElementById('password-display');

//Botão gerador de senha
document.getElementById('generate').addEventListener('click', () => {
  const showPassword = new PasswordGenerator();
  passwordEl.textContent = showPassword.generatePassword();
});

//botão de copiar senha
document.getElementById('copy').addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const passwordGenerated = passwordEl.innerText;
  
  if(!passwordGenerated) {return;}

  textArea.value = passwordGenerated;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Senha copiada');

  console.log(passwordGenerated)

});
