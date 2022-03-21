import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: 'edit/:id', component: EditComponent, data: { title: marker('Edit Profile') } },
  { path: 'view/:id', component: ViewComponent, data: { title: marker('View Profile') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProfileRoutingModule {}
