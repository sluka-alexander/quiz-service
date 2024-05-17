import { NgModule } from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./shared/components/home-page/home-page.component";
import {QuizePageComponent} from "./shared/components/quize-page/quize-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'quiz/:id', component: QuizePageComponent }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
