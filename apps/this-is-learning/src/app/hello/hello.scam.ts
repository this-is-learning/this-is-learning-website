import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule, RouterModule],
})
export class HelloScam {}
