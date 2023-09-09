import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.css']
})
export class SplitterComponent implements OnInit {
  FormData!: FormGroup;
  bill: any
  tip: any
  tipAmount!: number
  people: any
  totalAmount!: number 
  displayResult: boolean | undefined
  errorMessage!: string |null;
  errorMessage2!: string | null;
  errorMessage3!: string | null;

  constructor (private builder: FormBuilder,@Inject(DOCUMENT) document: Document) {
    document.getElementById("myStyle")?.setAttribute("class", "splitter"); 
    document.getElementById("myStyle2")?.setAttribute("class", "splitter"); 
    document.getElementById("myStyle3")?.setAttribute("class", " splitter1 container"); 
  }

  ngOnInit (): void {
    this.FormData = this.builder.group({
      bill:new FormControl('', [Validators.required,
        Validators.pattern("^[0-9]*$")]),
        tipCustom:new FormControl(this.bill, [Validators.required,
          Validators.pattern("^[0-9]*$")]),
      people: new FormControl('',[Validators.required,
        Validators.pattern("^[0-9]*$")])
  })

  console.log(this.FormData)
  }
  billVal (e: any) {
    this.bill = e.target.value
    this.amountVal()
    this.errorMessage=this.FormData.controls['bill'].errors?.['pattern']?"pattern":null
    
  }

  peopleVal (e: any) {
    this.people = e.target.value
    this.errorMessage3=this.FormData.controls['people'].errors?.['pattern']?"pattern":null
    this.amountVal()
  }

  tipVal (number: number, e?: any) {
    if (number > 0) {
      this.tip = number
    } else if (number == 0) {
      this.tip = e.target.value
      this.errorMessage2=this.FormData.controls['tipCustom'].errors?.['pattern']?"pattern":null
    }
    this.amountVal()
  }

  amountVal () {
    this.tipAmount = (this.bill * (this.tip?this.tip/100:0 )) / (this.people?this.people:1)
    this.totalAmount = this.bill / (this.people?this.people:1) + this.tipAmount

    this.tipAmount = isNaN(this.tipAmount) || this.tipAmount == Infinity? 0:this.tipAmount
    this.totalAmount = isNaN(this.totalAmount) || this.totalAmount == Infinity? 0:this.totalAmount
  }

  reset(){
    this.FormData.reset()
    this.errorMessage=null
    this.errorMessage2=null
    this.errorMessage3=null
    this.bill = null
    this.tip = null
    this.people = null
    this.tipAmount = 0
    this.totalAmount = 0
  }

}
