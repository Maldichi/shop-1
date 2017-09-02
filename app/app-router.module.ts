import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }   from './view/admin/admin.component';
import { BuyerComponent } from './view/buyer/main/buyer.component';
import { ManagerComponent } from './view/manager/manager.component';
import { SaleComponent } from './view/sale/sale.component';



const routes: Routes = [

  { path: 'admin',  component: AdminComponent },
  { path: 'shopping', component: BuyerComponent },
  { path: 'manager',     component: ManagerComponent },
  { path: 'sale',     component: SaleComponent },
  { path: '', redirectTo: '/shopping/catalog', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
