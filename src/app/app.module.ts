import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ServicesPageComponent} from './system/services-page/services-page.component';
import {GalleryPageComponent} from './system/gallery-page/gallery-page.component';
import {ProjectsPageComponent} from './system/projects-page/projects-page.component';
import {WebProjectsPageComponent} from './system/web-projects-page/web-projects-page.component';
import {MobileAppsPageComponent} from './system/mobile-apps-page/mobile-apps-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesPageComponent,
    GalleryPageComponent,
    ProjectsPageComponent,
    WebProjectsPageComponent,
    MobileAppsPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
