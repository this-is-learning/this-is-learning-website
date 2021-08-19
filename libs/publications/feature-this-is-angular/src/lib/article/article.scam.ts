import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TruncateScam } from '../truncate/truncate.scam';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [CommonModule, TruncateScam],
})
export class ArticleScam {}
