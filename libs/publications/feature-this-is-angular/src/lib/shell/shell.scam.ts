import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleScam } from '../article/article.scam';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ArticleScam],
})
export class ShellScam {}
