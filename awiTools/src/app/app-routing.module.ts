import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'ideas', loadChildren: () => import('./modules/ideas-board/ideas-board.module').then(m => m.IdeasBoardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     scrollPositionRestoration: 'enabled'
    ,preloadingStrategy: PreloadAllModules
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
