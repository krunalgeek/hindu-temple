import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule
    ],
    providers: [
        {
            provide: 'Window',
            useValue: window,
        }
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule
    ],
})

export class SharedModule { }
