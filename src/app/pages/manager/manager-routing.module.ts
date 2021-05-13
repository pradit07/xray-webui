import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ManagerComponent } from "./manager.component";

import { Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: ManagerComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }