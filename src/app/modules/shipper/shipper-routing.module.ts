import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipperComponent } from './shipper.component';





const routes: Routes = [
    { path: '', component: ShipperComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShipperRoutingModule { }