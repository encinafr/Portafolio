//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'menu', component: MenuComponent },
    // { path: 'attendance', component: AttendanceComponent },
    // { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes,{ enableTracing: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { } 