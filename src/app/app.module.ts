import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { AppBarComponent } from './app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactMeComponent,
    AppBarComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
