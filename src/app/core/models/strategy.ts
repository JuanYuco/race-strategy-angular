export interface StrategyForm {
  driverId : number,
  createdBy : string,
  laps: number
};

export interface OptimalStrategy {
  totalConsumed : number,
  averagePerformance : number,
  stintCollection : OptimalStrategyStint[]
}

export interface OptimalStrategyStint {
  tireType : string,
  laps : number
}
