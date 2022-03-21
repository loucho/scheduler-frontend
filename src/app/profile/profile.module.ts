import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ViewComponent, EditComponent],
  imports: [CommonModule, TranslateModule, SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
