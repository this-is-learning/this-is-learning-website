import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { HelloScam } from './hello/hello.scam';

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
