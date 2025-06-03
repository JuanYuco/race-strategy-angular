import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { StrategyForm } from '../../models/strategy';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-strategy-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './strategy-form.component.html',
  styleUrl: './strategy-form.component.css'
})
export class StrategyFormComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<StrategyForm>();
  form : FormGroup;
  drivers : Driver[] = [];
  errorMessage: string = "";

  constructor(private driverService : DriverService, formBuilder : FormBuilder){
    this.form = formBuilder.group({
      driverId: [null, Validators.required],
      createdBy: ['', Validators.required],
      laps: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.driverService.getAll().subscribe(data => {
      this.drivers = data;
    });
  }

  onSubmit() {
    const strategyForm = this.form.value as StrategyForm;
    if (!this.form.valid){
      if (strategyForm.createdBy == null || strategyForm.createdBy.length == 0){
        this.errorMessage = "El nombre es obligatorio";
        return;
      }

      if (strategyForm.laps <= 0) {
        this.errorMessage = "Debe ingresar una cantidad valida de vueltas";
        return;
      }

      return;
    }

    this.errorMessage = "";
    this.eventEmitter.emit(strategyForm);
  }
}
