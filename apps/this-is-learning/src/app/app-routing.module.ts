import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent, HelloScam } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HelloScam],
})
export class AppRoutingModule {}
