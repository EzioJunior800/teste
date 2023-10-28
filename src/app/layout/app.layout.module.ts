import { importTabsModule } from './../importsTabs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from './config/app.config.module';
import { AppLayoutComponent } from './app.layout.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppProfileSidebarComponent } from './app.profilesidebar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ContentTabsComponent } from './content-tabs/content-tabs.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CompanyComponent } from './content-tabs/company/company.component';
import { DataBoxPermissionDirective } from '../directives/data-box-permission.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../demo/components/auth/auth.service';




@NgModule({
    declarations: [AppLayoutComponent, DataBoxPermissionDirective, AppBreadcrumbComponent, AppSidebarComponent, AppTopbarComponent, AppProfileSidebarComponent, AppMenuComponent, AppMenuitemComponent, ContentTabsComponent, CompanyComponent],
    imports: [
        TieredMenuModule,
        importTabsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StyleClassModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        ButtonModule
    ],
    providers: [        
        { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
      ],
})
export class AppLayoutModule {}
