import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProjectsTableComponent } from './tabs/projects/projects-table/projects-table.component';
import { ProjectsComponent } from './tabs/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    ChartAreaComponent,
    TabsComponent,
    ProjectsComponent,
    ProjectsTableComponent,
  ],
  imports: [
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
