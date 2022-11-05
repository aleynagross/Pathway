import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionareComponent } from './questionare/questionare.component';
const routes: Routes = [
  {path: 'test', component: QuestionareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
