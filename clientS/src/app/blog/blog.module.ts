import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogComponent } from './blog.component';
import { BlogMaterialModule } from './blog-material.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    BlogMaterialModule,
    FlexLayoutModule
  ]
})
export class BlogModule { }
