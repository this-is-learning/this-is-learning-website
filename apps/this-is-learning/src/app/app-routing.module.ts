import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { HelloModule } from './hello/hello.module';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HelloModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
