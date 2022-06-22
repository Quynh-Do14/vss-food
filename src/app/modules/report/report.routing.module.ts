import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportMonthComponent } from "./report-month/report-month.component";
import { ReportYearComponent } from "./report-year/report-year.component";
const routes : Routes=[
    {path:'', component: ReportYearComponent},
    // {path:'/Report-Month', component: ReportMonthComponent},
    // {path:'/Report-Year', component: ReportYearComponent}
    
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule{ }