import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContentComponent } from 'src/app/layouts/layout-content/layout-content.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [

    {
        path: '',
        component: LayoutContentComponent,
        children: [
            {
                path: 'product',
                loadChildren: () =>
                    import('../product/product.module').then((m) => m.ProductModule),
            },
            {
                path: 'category',
                loadChildren: () =>
                    import('../category/category.module').then((m) => m.CategoryModule),
            },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: '/admin', pathMatch: 'full' },

            {
                path: 'combo',
                loadChildren: () =>
                    import('../combo/combo.module').then((m) => m.ComboModule),
            },
            {
                path: 'feedback',
                loadChildren: () =>
                    import('../feedback/feedback.module').then((m) => m.FeedbackModule),
            },
            {
                path: 'promotion',
                loadChildren: () =>
                    import('../promotion/promotion.module').then((m) => m.PromotionModule),
            },
            {
                path: 'shipper',
                loadChildren: () =>
                    import('../shipper/shipper.module').then((m) => m.ShipperModule),
            },
            {
                path: 'report',
                loadChildren: () =>
                    import('../report/report.module').then((m) => m.ReportModule),
            },
            {
                path: 'user',
                loadChildren: () =>
                    import('../user/user.module').then((m) => m.UserModule),
            },
            {
                path: 'chang-password',
                loadChildren: () =>
                    import('../auth/change-password/change.module').then((m) => m.ChangeModule),
            },
            {
                path: 'order',
                loadChildren: () =>
                    import('../order/order.module').then((m) => m.OrderModule),
            },
            {
                path: 'report',
                loadChildren: () =>
                    import('../report/report.module').then((m) => m.ReportModule),
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }