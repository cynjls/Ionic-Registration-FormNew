import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ionicForm: FormGroup;
  isFormValid: boolean = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z\s]+$')]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z\s]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[^!\\s@]+@[^!\\s@]+\\.[^!\\s@]+$'),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    // Subscribe to the form value changes to update the isFormValid property
    this.ionicForm.valueChanges.subscribe(() => {
      this.isFormValid = this.ionicForm.valid;
    });
  }

  submitForm() {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
    } else {
      console.log('Please provide all the required values!');
    }
  }
}


