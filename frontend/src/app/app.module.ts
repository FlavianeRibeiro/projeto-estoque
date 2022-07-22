import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatProdutsComponent } from './creat-produts/creat-produts.component';
import { ReadProdutsComponent } from './read-produts/read-produts.component';

import { HttpClientModule } from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';

import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProdutsComponent } from './view-produts/view-produts.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListProdutsComponent } from './list-produts/list-produts.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatProdutsComponent,
    ReadProdutsComponent,
    ViewProdutsComponent,
    HeaderComponent,
    ListProdutsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
