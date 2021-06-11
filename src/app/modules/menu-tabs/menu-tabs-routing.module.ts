import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTabsPage } from './components/menu-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.module').then(m => m.ListsModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
