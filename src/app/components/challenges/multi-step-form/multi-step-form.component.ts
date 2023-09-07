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

  constructor() { }

  ngOnInit(): void {
    this.selected
    console.log(this.selected)
    this.timePlan()
    this.addPlan()
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
    console.log(this.selected)
    
   this.timePlan()
   this.addPlan()
  }

}
