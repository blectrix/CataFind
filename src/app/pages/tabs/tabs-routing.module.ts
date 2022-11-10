import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
    ]
  },
  {
    path: 'deals',
    loadChildren: () => import('./deals/deals.module').then( m => m.DealsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.module').then( m => m.StoresPageModule)
  },
  {
    path: 'ctv',
    loadChildren: () => import('./ctv/ctv.module').then( m => m.CtvPageModule)
  },
  {
    path: 'categories-datails',
    loadChildren: () => import('./categories-datails/categories-datails.module').then( m => m.CategoriesDatailsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
