import { NgModule } from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";
import {QuizePageComponent} from "./shared/pages/quize-page/quize-page.component";
import {RulesPageComponent} from "./shared/pages/rules-page/rules-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'quiz/:id', component: QuizePageComponent },
      { path: 'rules', component: RulesPageComponent }
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
