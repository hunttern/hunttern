import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';

@Injectable({
  providedIn: 'root'
})
export class ContinuationService {

  private _continuation: EntityId[] = [];
  private _chart: any;
  
  private _cup: any[];
  private _flag: any[];
  private _rectangle: any[];
  private _triangle: any[];
  private _wedge: any[];

  constructor() { }
}
