import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {
  statusUppercase= false;
  statusLowercase = false;
  statusNumber = false;
  statusSymbol = false;
  letters!: string[];
 lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
 upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
  type!: string[];
  generateChar: string | undefined;
  char: any;
  password: any;
  number: any;
  result='';

  level1!: boolean;
  level2!: boolean;
  level3!: boolean;

  level4!: boolean;
 
  constructor() { }



  ngOnInit(): void {  

  console.log(this.lowerCaseLetters)
  console.log(this.generateChar)
  console.log(this.password)
  }

  getPassword(type:any,number:number){
    this.type = type
 this.password = []
this.type.includes('upperCase')?this.password.push(this.upperCaseLetters.at(Math.floor(Math.random() * (this.upperCaseLetters.length-1)))):null
this.type.includes('lowerCase')?this.password.push(this.lowerCaseLetters.at(Math.floor(Math.random() * (this.lowerCaseLetters.length-1)))):null
this.type.includes('number')?this.password.push(this.numbersZeroToNine.at(Math.floor(Math.random() * (this.numbersZeroToNine.length-1)))):null
this.type.includes('symbol')?this.password.push(this.selectedSpecialCharacters.at(Math.floor(Math.random() * (this.selectedSpecialCharacters.length-1)))):null
console.log(number-type.length)
for(let i = 0 ; i < number-type.length;i++){
  this.generateChar = this.type.at(Math.floor(Math.random() * 2))
 this.generateChar == 'upperCase'?this.password.push(this.upperCaseLetters.at(Math.floor(Math.random() * (this.upperCaseLetters.length-1)))):null
this.generateChar == 'lowerCase'?this.password.push(this.lowerCaseLetters.at(Math.floor(Math.random() * (this.lowerCaseLetters.length-1)))):null
this.generateChar == 'number'?this.password.push(this.numbersZeroToNine.at(Math.floor(Math.random() * (this.numbersZeroToNine.length-1)))):null
this.generateChar == 'symbol'?this.password.push(this.selectedSpecialCharacters.at(Math.floor(Math.random() * (this.selectedSpecialCharacters.length-1)))):null
} console.log(this.password.join(''))
return this.password.join('')

  }

  valueChanged(e:any) {
    this.number = e.target.value
    console.log(e.target.value);
  }

  generate(){
    const type = [];
    console.log(this.statusUppercase)
    console.log(this.statusLowercase)
    console.log(this.statusNumber)
    console.log(this.statusSymbol)
    console.log(this.number)
    this.statusUppercase == true? type.push('upperCase'):null
    this.statusLowercase == true? type.push('lowerCase'):null
    this.statusNumber == true? type.push('number'):null
    this.statusSymbol == true? type.push('symbol'):null
    console.log(type)
    this.result = this.getPassword(type,this.number)
    this.level1 = this.type.length >= 1 
    this.level2 = this.type.length >= 2
    this.level3 = this.type.length >= 3
    this.level4 = this.type.length >= 4
    // this.number <6?this.levelName =="Low": this.number <10?: this.number <6?: this.number <6?
    console.log(this.level2)
  }

}
