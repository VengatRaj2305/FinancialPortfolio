import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppService } from '../app.service';


@Component({
  selector: 'app-investment-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './investment-details.component.html',
  styleUrl: './investment-details.component.css'
})
export class InvestmentDetailsComponent implements OnInit{
  showPreview = false;

  investmentForm = new FormGroup({
    assetType: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    purchasePrice: new FormControl('', [Validators.required, Validators.min(0)]),
    purchaseDate: new FormControl('', Validators.required),
  });
  constructor(private appService:AppService){

  }
  ngOnInit(){

  }
  get f() {
    return this.investmentForm.controls;
  }

  onPreview() {
    if (this.investmentForm.valid) {
      this.showPreview = true;
    } else {
      this.investmentForm.markAllAsTouched();
    }
  }

  onSubmit() {
    if (!this.investmentForm.valid) {
      this.investmentForm.markAllAsTouched();
      return;
    }
    alert("Date is saved")
    this.investmentForm.reset();
   this.showPreview = false;
  }

  editForm() {
    this.showPreview = false;
  }
}
