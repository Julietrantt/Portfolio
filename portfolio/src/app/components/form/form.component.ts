import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../service/contact.service';
import emailjs from '@emailjs/browser'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      message: new FormControl('', [Validators.required])
  })}

  // onSubmit(FormData: any) {
  //   console.log(FormData)
  //   this.contact.PostMessage(FormData)
  //   .subscribe(response => {
  //   location.href = 'https://mailthis.to/confirm'
  //   console.log(response)
  //   }, error => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  //   })
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

// emailjs.send("service_is2c2kv","template_s9feham",{
//   email: "1995julietran@gmail.com",
//   message: "vv",
//   name: "Marti",
//   });