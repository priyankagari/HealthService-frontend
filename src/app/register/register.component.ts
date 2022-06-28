import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    fname:null,
    lname:null,
    role:null,
    hospital:null,
    specialisation:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  doctor =  false;
  patient = false;
  speacilazation ='';
  Roles = [
    { id: 'select', label: "Select your role" },
    { id: 'patient', label: "Patient" },
    { id: 'doctor', label: "Doctor" },
    // { id: 3, label: "Lab Assitant" },
    // { id: 4, label: "Pharmacist" },

   ]

   Specialisation =[

    {id:'selectSpe', label : "Select Specialisation"},
    {id:'allergy and immunology', label : "Allergy and immunology"},
    {id:'anesthesiology', label : "Anesthesiology"},
    {id:'dermatology', label : "Dermatology"},
    {id:'diagnosticradiology', label : "Diagnosticradiology"},
    {id:'diagnostic radiology', label : "Diagnostic radiology"},
    {id:'emergency medicine', label : "Emergency medicine"},
    {id:'family medicine', label : "Family medicine"},
    {id:'internal medicine', label : "Internal medicine"},
    {id:'medical genetics', label : "Medical genetics"},
    {id:'neurology', label : "Neurology"},
    {id:'nuclear medicine', label : "nuclear medicine"},
    {id:'obstetrics and gynecology', label : "Obstetrics and gynecology"},
    {id:'pathology', label : "Pathology"},
    {id:'pediatrics', label : "Pediatrics"},
    {id:'physical medicine and rehabilitation', label : "Physical medicine and rehabilitation"},
    {id:'preventive medicine', label : "Preventive medicine"},
    {id:'psychiatry', label : "Psychiatry"},
    {id:'radiation oncology', label : "Radiation oncology"},
    {id:'surgery', label : "Surgery"},
    {id:'urology', label : "Urology"}

   ]
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    console.log(this.form);
    

    // this.authService.register(username, email, password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }
  OnRoleChange(e:any):void {

    // e.target.value;
    console.log(e.target.value);
    console.log(this.doctor);
    
   
    if(e.target.value === 'doctor'){
       this.doctor = true;
       if(this.patient){
        this.patient = false;
       }
    }
    if(e.target.value === 'patient'){
      this.patient = true;
      if(this.doctor){
       this.doctor = false;
      }
   }

   if(e.target.value === 'select'){
  
    if(this.doctor){
     this.doctor = false;
    }
    if(this.patient){
      this.patient = false;
     }
 }

    // if(e.target.value === 2){
    //   console.log("I am here")
    //    if(!this.doctor){
    //     this.doctor = true;
    //     console.log(this.doctor);
    //     if(this.patient){
    //       this.patient = false;
    //     }
    //    }
    // }
    
    
  }

  OnSpecChange(e:any):void {

    this.speacilazation = e.target.value;

  }
}
