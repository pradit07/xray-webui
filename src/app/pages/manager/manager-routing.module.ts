import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ManagerBaseComponent } from './base/manager-base.component';
import { ManagerDNSComponent } from './dns/manager-dns.component';
import { ManagerProxyComponent } from './proxy/manager-proxy.component';
import { ManagerRouteComponent } from './route/manager-route.component';

import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/manager/proxy' },
  { path: 'base', component: ManagerBaseComponent },
  { path: 'proxy', component: ManagerProxyComponent },
  { path: 'dns', component: ManagerDNSComponent },
  { path: 'route', component: ManagerRouteComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }