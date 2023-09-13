import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../../service/contact.service';
import emailjs from '@emailjs/browser'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  FormData!: FormGroup;
  name: any;
  nameErrorMessage!: string | null;
  email: any;
  emailErrorMessage!: string | null;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z ]+$')]),
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      message: new FormControl('', [Validators.required])
  })}

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

send(){
  emailjs.init('7r9YzdI0azp0rXeCb')
let response = emailjs.send("service_is2c2kv","template_s9feham",{
  email: this.FormData.value.email,
  message: this.FormData.value.message,
  name: this.FormData.value.name,
  });

  alert('message has been sent.')
  this.FormData.reset()
}
}

