import { Component, Input } from '@angular/core';
import { OptimalStrategy } from '../../models/strategy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strategy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strategy-list.component.html',
  styleUrl: './strategy-list.component.css'
})

export class StrategyListComponent {
  @Input() optimalStrategies : OptimalStrategy[] = [];
}
