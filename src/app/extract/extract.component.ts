import { Transfer } from './../models/transfer.model';
import { TransfersService } from './../services/transfers.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})

export class ExtractComponent implements OnInit {

  transfers:any[];

  constructor(private service:TransfersService) {}

  ngOnInit(): void {
    this.service.getTransfers().subscribe((transfers:Transfer[]) => {
      this.transfers = transfers;
    });
  }
}
