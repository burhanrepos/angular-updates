import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFifteenUpdatesComponent } from './angular-15-all-updates/angular-fifteen-updates/angular-fifteen-updates.component';
import { StandaloneComponentComponent } from './angular-15-all-updates/standalone-component/standalone-component.component';
import { FontWeightDirective } from './font-weight.directive';
import { ColorDirective } from './color.directive';
import { StyleDirective } from './style.directive';
import { AngularSixteenUpdatesComponent } from './angular-sixteen-updates/angular-sixteen-updates.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    AngularFifteenUpdatesComponent,
    StandaloneComponentComponent,
    FontWeightDirective,
    ColorDirective,
    StyleDirective,
    AngularSixteenUpdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
