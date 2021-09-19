import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '@this-is-learning/navigation';

import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule, NavigationModule],
})
export class HelloScam {}
