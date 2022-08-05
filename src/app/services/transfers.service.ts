import { Transfer } from './../models/transfer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  private url = "http://localhost:3000/transferencias";

  constructor(private client:HttpClient) {}

  getTransfers(): Observable<Transfer[]>{
    return this.client.get<Transfer[]>(this.url);
  }

  setTransfer(transfer:Transfer): Observable<Transfer>{
    this.helperTransfer(transfer);
    return this.client.post<Transfer>(this.url, transfer)
  }

  helperTransfer(transfer:any){
    transfer.data = new Date().toLocaleDateString("pt-BR");
  }
}
