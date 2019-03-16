import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersMaterialModule } from './users-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, SearchPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class UsersModule { }
