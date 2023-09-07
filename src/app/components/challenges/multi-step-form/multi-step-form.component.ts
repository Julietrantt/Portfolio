import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
  tab1!: boolean;
  tab2!: boolean;
  tab3!: boolean;
  tab4!: boolean;
  tabStatus ='status';
  tabStatus2='status2';
  tabStatus3='status3';
  tabStatus4='status4'
  status: string ="status";
  selected = false;
  arcadeText ='';
  advancedText ='';
  proText ='';
  onlineText='';
  storageText='';
  customText='';
  arcade='Arcade';
  advanced='Advanced';
  pro='Pro';
  planText='';
  summaryTime='';
  planPrice=0;
  online='Online';
  storage='Storage';
  profile='Profile'
  onlineTextSummary='';
  onlinePriceSummary= 0;
  onlineTextSummary2='';
  onlineTextSummary3='';
  onlinePriceSummary2= 0;
  onlinePriceSummary3= 0;
  status1 = false;
  status2 = false;
  status3 = false;
 

  constructor() { }

  ngOnInit(): void {
    this.onlinePriceSummary
    this.selected
    console.log(this.selected)
    this.timePlan()
    this.addPlan()
    // this.addPickToSummary()
    this.tab1=true
    this.status == 'status'
  }

  timePlan(){
    console.log(this.selected == false)
    if(this.selected == false){
      this.arcadeText = "$9/mo";
      this.advancedText = "$12/mo";
      this.proText ="$15/mo"
    }else{
      this.arcadeText = "$90/yr";
      this.advancedText = "$120/yr";
      this.proText = "$150/yr"
    }
  }

  addPlan(){
    console.log(this.selected == false)
    if(this.selected == false){
      this.onlineText = "+$1/mo";
      this.storageText = "+$2/mo";
      this.customText ="+$2/mo"
    }else{
      this.onlineText = "+$10/yr";
      this.storageText = "+$20/yr";
      this.customText = "+$20/yr"
    }
  }

  change(tab:string){
    console.log(tab)
    if(tab == "status"){
       this.tab1=true;
       this.tab2=false;
       this.tab3=false;
       this.tab4=false;
    }else if(tab == "status2") {
      this.tab1=false;
      this.tab2=true;
      this.tab3=false;
      this.tab4=false;
    }else if(tab == "status3") {
      this.tab1=false;
      this.tab2=false;
      this.tab3=true;
      this.tab4=false;
    }else if(tab == "status4") {
      this.tab1=false;
      this.tab2=false;
      this.tab3=false;
      this.tab4=true;
    }
    return this.status = tab
  }

  swicth(){
   this.timePlan()
   this.addPlan()
   this.addPickToSummary()
   this.addPickToSummary2()
   this.addPickToSummary3()
  }
  addPlanToSummary(plan:any){
 console.log( plan==this.arcade)
    plan==this.arcade? this.planText="Arcade" :plan==this.advanced?this.planText="Advanced":this.planText="Pro"
    this.selected == false? this.summaryTime = 'Monthly':this.summaryTime = 'Yearly'

    this.planText=="Arcade" && this.summaryTime=="Monthly"?this.planPrice=9:
    this.planText=="Advanced" && this.summaryTime=="Monthly"?this.planPrice=12:
    this.planText=="Pro" && this.summaryTime=="Monthly"?this.planPrice=15:
    this.planText=="Arcade" && this.summaryTime=="Yearly"?this.planPrice=90:
    this.planText=="Advanced" && this.summaryTime=="Yearly"?this.planPrice=120:
    this.planText=="Pro" && this.summaryTime=="Yearly"?this.planPrice=150:this.planPrice=0
  }

  // addPickToSummary(pick:string){

  //   pick==this.online? this.onlineTextSummary="Online Service" :pick==this.storage?this.onlineTextSummary2="Larger storage":this.onlineTextSummary3="Customizable Profile"
  //   this.selected == false? this.summaryTime = 'Monthly':this.summaryTime = 'Yearly'
  //   console.log(pick)


  // console.log(this.onlineTextSummary)
  
  // }

  addPickToSummary(){
    console.log(this.status1)
    this.selected == false? this.summaryTime = 'Monthly':this.summaryTime = 'Yearly'
    this.onlineTextSummary = 'Online Service'

    if( this.status1==true &&  this.selected == false){ 
        this.onlinePriceSummary=1 
    }else if(  this.status1==true &&  this.selected == true  ){
      this.onlinePriceSummary=10
    }else if( this.status1==false){
      this.onlineTextSummary='' ; this.onlinePriceSummary=0
    }
  }

  addPickToSummary2(){
    this.selected == false? this.summaryTime = 'Monthly':this.summaryTime = 'Yearly'
    this.onlineTextSummary2 = 'Larger storage'

    if(  this.status2==true &&  this.selected == false){ 
        this.onlinePriceSummary2=2 
    }else if( this.status2==true &&   this.selected == true  ){
      this.onlinePriceSummary2=20
    }else if(this.status2==false ){
      this.onlineTextSummary2='' ; this.onlinePriceSummary2=0
    }
  }
  addPickToSummary3(){
    this.selected == false? this.summaryTime = 'Monthly':this.summaryTime = 'Yearly'
    this.onlineTextSummary3 = 'Customizable Profile'

    if( this.status3==true &&   this.selected == false){ 
        this.onlinePriceSummary3=2 
    }else if( this.status3==true &&   this.selected == true  ){
      this.onlinePriceSummary3=20
    }else if(this.status3==false ){
      this.onlineTextSummary3='' ;this.onlinePriceSummary3=0
    }
  }
}
