import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComboListComponent } from "./combo-list/combo-list.component";


const routes : Routes=[
    {path:'', component: ComboListComponent}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComboRoutingModule{ }