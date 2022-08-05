import { Transfer } from './../models/transfer.model';
import { TransfersService } from './../services/transfers.service';
import { Component } from "@angular/core";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: "new-transfer",
  templateUrl: "./newTransfer.component.html",
  styleUrls: [
    "./newTransfer.component.scss"
  ],
})

export class newTransfer {

  constructor(private service:TransfersService, private router:Router){}

  value: number;
  recipient:string;

  sendTransfer(){

    let transfer: Transfer = {
      value: this.value,
      recipient: this.recipient
    };

    this.service.setTransfer(transfer).subscribe((transfer:Transfer) => {
      Swal.fire({
        icon: 'success',
        title: 'Transferência incluida com sucesso!',
        showConfirmButton: false,
        timer: 2500
      })

      this.router.navigateByUrl('extract')
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao incluir Transferência!',
        text: error
      })

      console.error(error)
    });
  }
}
