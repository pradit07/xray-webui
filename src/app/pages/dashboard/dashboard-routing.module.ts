import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
