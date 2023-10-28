import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTabsRoutingModule } from './content-tabs-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from 'src/app/infra/http/http-interceptor.service';
import { AuthGuard } from 'src/app/demo/components/auth/auth.guard';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    ContentTabsRoutingModule
  ],  
})
export class ContentTabsModule { }
