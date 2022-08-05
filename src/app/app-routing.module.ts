import { ExtractComponent } from './extract/extract.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { newTransfer } from './newTransfer/newTransfer.component';

export const routes: Routes = [
  {path: "", redirectTo: 'extract', pathMatch: 'full'},
  {path: "extract", component: ExtractComponent},
  {path: "transfer/new", component: newTransfer}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
