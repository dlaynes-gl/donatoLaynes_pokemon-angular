import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, ListComponent, ListItemComponent],
  exports: [DashboardComponent, ListComponent, ListItemComponent],
})
export class UiModule {}
