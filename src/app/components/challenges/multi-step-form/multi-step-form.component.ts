import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
})
export class MultiStepFormComponent implements OnInit {
  tab1!: boolean;
  tab2!: boolean;
  tab3!: boolean;
  tab4!: boolean;
  tabStatus = 'status';
  tabStatus2 = 'status2';
  tabStatus3 = 'status3';
  tabStatus4 = 'status4';
  tabStatus5 = 'status5';
  status: string = 'status';
  selected = false;
  arcadeText = '';
  advancedText = '';
  proText = '';
  onlineText = '';
  storageText = '';
  customText = '';
  arcade = 'Arcade';
  advanced = 'Advanced';
  pro = 'Pro';
  planText = '';
  summaryTime = '';
  planPrice = 0;
  online = 'Online';
  storage = 'Storage';
  profile = 'Profile';
  onlineTextSummary = '';
  onlineTextSummary2 = '';
  onlineTextSummary3 = '';
  onlinePriceSummary = 0;  
  onlinePriceSummary2 = 0;
  onlinePriceSummary3 = 0;
  status1 = false;
  status2 = false;
  status3 = false;
  totalAmount = 0;
  tab5!: boolean;
  FormData!: FormGroup;
  name: any;
  nameErrorMessage!: string | null;
  email: any;
  emailErrorMessage!: string | null;
  phone: any;
  phoneErrorMessage!: string | null;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name:new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z ]+$')]),
      email:new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('',[Validators.required,
        Validators.pattern("^[0-9 ]*$")])
  })



  console.log(this.FormData.status)
    this.onlinePriceSummary;
    this.selected;
    this.timePlan();
    this.addPlan();
    // this.addPickToSummary()
    this.tab1 = true;
    this.status == 'status';
  }
  nameVal(e: any) {
    this.name = e.target.value
    console.log(e.target.value)
    console.log(this.FormData.controls['name'])
    this.nameErrorMessage=this.FormData.controls['name'].errors?.['pattern']?"pattern":null
  }

  emailVal(e: any) {
    this.email = e.target.value
    console.log(e.target.value)
    console.log(this.FormData.controls['email'])
    this.emailErrorMessage=this.FormData.controls['email'].errors?.['pattern']?"pattern":null
  }

  phoneVal(e: any) {
    this.phone = e.target.value
    console.log(e.target.value)
    console.log(this.FormData.controls['phone'])
    this.phoneErrorMessage=this.FormData.controls['phone'].errors?.['pattern']?"pattern":null
  }

  timePlan() {
    if (this.selected == false) {
      this.arcadeText = '$9/mo';
      this.advancedText = '$12/mo';
      this.proText = '$15/mo';
    } else {
      this.arcadeText = '$90/yr';
      this.advancedText = '$120/yr';
      this.proText = '$150/yr';
    }
  }

  addPlan() {
    if (this.selected == false) {
      this.onlineText = '+$1/mo';
      this.storageText = '+$2/mo';
      this.customText = '+$2/mo';
    } else {
      this.onlineText = '+$10/yr';
      this.storageText = '+$20/yr';
      this.customText = '+$20/yr';
    }
  }

  change(tab: string) {
    if (tab == 'status') {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
    } else if (tab == 'status2') {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
    } else if (tab == 'status3') {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
      this.tab5 = false;
    } else if (tab == 'status4') {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
      this.tab5 = false;
    } else if (tab == 'status5') {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = true;
      this.planText = '';
      this.summaryTime = '';
      this.planPrice = 0;
      this.onlineTextSummary = '';
      this.onlinePriceSummary = 0;
      this.onlineTextSummary2 = '';
      this.onlinePriceSummary2 = 0;
      this.onlineTextSummary3 = '';
      this.onlinePriceSummary3 = 0;
      this.status1 = false;
      this.status2 = false;
      this.status3 = false;
      this.selected = false;
      this.totalAmount = 0;
    }
    return (this.status = tab);
  }

  swicth() {
    this.timePlan();
    this.addPlan();
    this.addPickToSummary();
    this.addPickToSummary2();
    this.addPickToSummary3();
    this.addPlanToSummary(this.planText)
  }
  addPlanToSummary(plan: any) {
    plan == this.arcade
      ? (this.planText = 'Arcade')
      : plan == this.advanced
        ? (this.planText = 'Advanced')
        : (this.planText = 'Pro');
    this.selected == false
      ? (this.summaryTime = 'Monthly')
      : (this.summaryTime = 'Yearly');

    this.planText == 'Arcade' && this.summaryTime == 'Monthly'
      ? (this.planPrice = 9)
      : this.planText == 'Advanced' && this.summaryTime == 'Monthly'
        ? (this.planPrice = 12)
        : this.planText == 'Pro' && this.summaryTime == 'Monthly'
          ? (this.planPrice = 15)
          : this.planText == 'Arcade' && this.summaryTime == 'Yearly'
            ? (this.planPrice = 90)
            : this.planText == 'Advanced' && this.summaryTime == 'Yearly'
              ? (this.planPrice = 120)
              : this.planText == 'Pro' && this.summaryTime == 'Yearly'
                ? (this.planPrice = 150)
                : (this.planPrice = 0);

    this.totalCount();
  }
  addPickToSummary() {
    this.selected == false
      ? (this.summaryTime = 'Monthly')
      : (this.summaryTime = 'Yearly');
    this.onlineTextSummary = 'Online Service';

    if (this.status1 == true && this.selected == false) {
      this.onlinePriceSummary = 1;
    } else if (this.status1 == true && this.selected == true) {
      this.onlinePriceSummary = 10;
    } else if (this.status1 == false) {
      this.onlineTextSummary = '';
      this.onlinePriceSummary = 0;
    }
    this.totalCount();
  }

  addPickToSummary2() {
    this.selected == false
      ? (this.summaryTime = 'Monthly')
      : (this.summaryTime = 'Yearly');
    this.onlineTextSummary2 = 'Larger storage';

    if (this.status2 == true && this.selected == false) {
      this.onlinePriceSummary2 = 2;
    } else if (this.status2 == true && this.selected == true) {
      this.onlinePriceSummary2 = 20;
    } else if (this.status2 == false) {
      this.onlineTextSummary2 = '';
      this.onlinePriceSummary2 = 0;
    }

    this.totalCount();
  }
  addPickToSummary3() {
    this.selected == false
      ? (this.summaryTime = 'Monthly')
      : (this.summaryTime = 'Yearly');
    this.onlineTextSummary3 = 'Customizable Profile';

    if (this.status3 == true && this.selected == false) {
      this.onlinePriceSummary3 = 2;
    } else if (this.status3 == true && this.selected == true) {
      this.onlinePriceSummary3 = 20;
    } else if (this.status3 == false) {
      this.onlineTextSummary3 = '';
      this.onlinePriceSummary3 = 0;
    }
    this.totalCount();
  }
  totalCount() {
    this.totalAmount =
      this.onlinePriceSummary +
      this.onlinePriceSummary2 +
      this.onlinePriceSummary3 +
      this.planPrice;
  }
}
