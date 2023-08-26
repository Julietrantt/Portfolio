import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.css']
})
export class SplitterComponent implements OnInit {
  bill: any
  tip: any
  tipAmount!: number
  people: any
  totalAmount: number | undefined

  constructor () {}

  ngOnInit (): void {}
  billVal (e: any) {
    this.bill = e.target.value
    console.log(e.target.value)
    console.log(e)
    this.amountVal()
  }

  peopleVal (e: any) {
    this.people = e.target.value
    console.log(e.target.value)
    this.amountVal()
  }

  tipVal (number: number, e?: any) {
    if (number > 0) {
      this.tip = number
    } else if (number == 0) {
      this.tip = e.target.value
    }
    console.log(this.tip)
    this.amountVal()
  }

  amountVal () {
    this.tipAmount = (this.bill * (this.tip / 100)) / this.people
    this.totalAmount = this.bill / this.people + this.tipAmount

    console.log(this.bill)
    console.log(this.people)
    console.log(this.tip / 100)
    console.log(this.tipAmount)
    console.log(this.totalAmount)
  }
}
