import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell.component';
import { ShellScam } from './shell.scam';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ShellScam],
})
export class ShellModule {}
