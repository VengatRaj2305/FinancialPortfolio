import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface InvestmentEntry {
  assetType: string;
  quantity: number;
  purchasePrice: number;
  purchaseDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _investmentData = new BehaviorSubject<InvestmentEntry[]>([
    {
      assetType: 'Stocks',
      quantity: 9,
      purchasePrice: 9,
      purchaseDate: '2025-04-04T13:00:00-08:00'
    }
  ]);

  investmentData$ = this._investmentData.asObservable();

  constructor() {}

  setInvestmentData(entry: InvestmentEntry) {
    const currentData = this._investmentData.getValue();
    this._investmentData.next([...currentData, entry]);
  }

  getCurrentInvestmentData(): InvestmentEntry[] {
    return this._investmentData.getValue();
  }
}
