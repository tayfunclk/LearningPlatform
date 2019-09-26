import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { EditquestionComponent } from './question/editquestion/editquestion.component';
import { GetquestionComponent } from './question/getquestion/getquestion.component';

const routes: Routes = [
  { path: 'product/create', component: ProductEditComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'products', component: ProductGetComponent },

  { path: 'getQuestions', component: GetquestionComponent },
  { path: 'question', component: EditquestionComponent },
  { path: 'question/edit/:id', component: EditquestionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
