import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServicesPageComponent} from './system/services-page/services-page.component';
import {GalleryPageComponent} from './system/gallery-page/gallery-page.component';
import {ProjectsPageComponent} from './system/projects-page/projects-page.component';
import {WebProjectsPageComponent} from './system/web-projects-page/web-projects-page.component';
import {MobileAppsPageComponent} from './system/mobile-apps-page/mobile-apps-page.component';


const routes: Routes = [
  {path: 'services', component: ServicesPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'web-projects', component: WebProjectsPageComponent},
  {path: 'mobile-apps', component: MobileAppsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
