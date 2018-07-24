import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { PagesService } from './services/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        PagesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }