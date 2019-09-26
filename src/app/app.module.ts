import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './product/products.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, AppConfig } from './model/common';
import { GetquestionComponent } from './question/getquestion/getquestion.component';
import { EditquestionComponent } from './question/editquestion/editquestion.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductGetComponent,
    ProductEditComponent,
    SidebarComponent,
    GetquestionComponent,
    EditquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductsService, { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
