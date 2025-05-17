import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarLinksComponent } from './components/navbar-links/navbar-links.component';
import { MaterialModule } from './modules/material.module';
import { D3ChartsModule } from './components/d3/d3-charts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ScratchComponent } from './pages/scratch/scratch.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarLinksComponent,
        ScratchComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        D3ChartsModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
