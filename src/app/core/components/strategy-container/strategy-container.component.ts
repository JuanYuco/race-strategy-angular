import { Component } from '@angular/core';
import { StrategyFormComponent } from '../strategy-form/strategy-form.component';
import { StrategyService } from '../../services/strategy.service';
import { OptimalStrategy, StrategyForm } from '../../models/strategy';
import { StrategyListComponent } from '../strategy-list/strategy-list.component';

@Component({
  selector: 'app-strategy-container',
  standalone: true,
  imports: [StrategyFormComponent, StrategyListComponent],
  templateUrl: './strategy-container.component.html',
  styleUrl: './strategy-container.component.css'
})
export class StrategyContainerComponent {
  optimalStrategies : OptimalStrategy[] = [];
  constructor(private strategyService : StrategyService){}

  onSubmit(strategyForm : StrategyForm){
    this.strategyService.getAll(strategyForm).subscribe(data => {
      this.optimalStrategies = data;
    });
  }
}
