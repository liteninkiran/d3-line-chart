import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarLinksComponent } from './components/navbar-links/navbar-links.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarLinksComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
