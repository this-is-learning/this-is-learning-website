import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevCommunityRssItemsResolver } from '../dev-community-rss-items.resolver';
import { ShellComponent } from './shell.component';
import { ShellScam } from './shell.scam';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    data: {
      rssUrl: 'https://dev.to/feed/this-is-angular',
    },
    resolve: {
      rssItems: DevCommunityRssItemsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ShellScam],
})
export class ShellModule {}
