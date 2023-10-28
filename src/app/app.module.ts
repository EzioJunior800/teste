import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { AuthInterceptorService } from "./infra/http/http-interceptor.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from './demo/components/auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, AppLayoutModule, FormsModule, HttpClientModule, BrowserAnimationsModule, StoreModule.forRoot({}, {})],
    providers: [AuthGuard,
        {provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi:true},
        { provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent]
})
export class AppModule { }
