import { EventEmitter, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MENU_CONFIG } from '../infra/newTabCreateParams';
import { ActionButtonService } from '../infra/servicesActionButton/actionButton.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    @Output() addTab = new EventEmitter<any>();

    constructor(
        private actionButtonService: ActionButtonService
    ) {}

    model: MenuItem[] = [];
    menuConfig = MENU_CONFIG;
    dataTab: any;

    teste() {
        alert(6);
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Empresas',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Grupos',
                        icon: 'pi pi-fw pi-home',
                        //routerLink: ['/'],
                        command: () =>
                            this.newTabCreate(
                                'Grupo de Empresas',
                                'company-group',
                                'CompanyGroup',
                                3,
                                'edit01',
                                'Cadastrar'
                            ),
                    },
                    {
                        label: 'Empresas',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/dashboard-banking'],
                        command: () =>
                            this.newTabCreate(
                                'Grupo de Empresas',
                                'company-group',
                                'Companies',
                                3,
                                'edit01',
                                'Cadastrar'
                            ),
                    },
                ],
            },
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'E-Commerce',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                    {
                        label: 'Banking',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/dashboard-banking'],
                        command: () => this.teste(),
                    },
                ],
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Blog',
                        icon: 'pi pi-fw pi-comment',
                        items: [
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/apps/blog/list'],
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/apps/blog/detail'],
                            },
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/blog/edit'],
                            },
                        ],
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar'],
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/apps/chat'],
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/apps/files'],
                    },
                    {
                        label: 'Kanban',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/apps/kanban'],
                    },
                    {
                        label: 'Mail',
                        icon: 'pi pi-fw pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['/apps/mail/inbox'],
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/mail/compose'],
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['/apps/mail/detail/1000'],
                            },
                        ],
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/apps/tasklist'],
                    },
                ],
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-fw pi-star-fill',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout'],
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input'],
                    },
                    {
                        label: 'Float Label',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: 'Invalid State',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/uikit/invalidstate'],
                    },
                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/uikit/button'],
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table'],
                    },
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list'],
                    },
                    {
                        label: 'Tree',
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/uikit/tree'],
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/uikit/panel'],
                    },
                    {
                        label: 'Overlay',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/uikit/overlay'],
                    },
                    {
                        label: 'Media',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/uikit/media'],
                    },
                    {
                        label: 'Menu',
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/uikit/menu'],
                        routerLinkActiveOptions: {
                            paths: 'subset',
                            queryParams: 'ignored',
                            matrixParams: 'ignored',
                            fragment: 'ignored',
                        },
                    },
                    {
                        label: 'Message',
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/uikit/message'],
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file'],
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/uikit/charts'],
                    },
                    {
                        label: 'Misc',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/uikit/misc'],
                    },
                ],
            },
            {
                label: 'Prime Blocks',
                icon: 'pi pi-fw pi-prime',
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/blocks'],
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        target: '_blank',
                    },
                ],
            },
            {
                label: 'Utilities',
                icon: 'pi pi-fw pi-compass',
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['utilities/icons'],
                    },
                    {
                        label: 'Colors',
                        icon: 'pi pi-fw pi-palette',
                        routerLink: ['utilities/colors'],
                    },
                    {
                        label: 'PrimeFlex',
                        icon: 'pi pi-fw pi-desktop',
                        target: '_blank',
                    },
                    {
                        label: 'Figma',
                        icon: 'pi pi-fw pi-pencil',
                        target: '_blank',
                    },
                ],
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing'],
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                            },
                            {
                                label: 'Register',
                                icon: 'pi pi-fw pi-user-plus',
                                routerLink: ['/auth/register'],
                            },
                            {
                                label: 'Forgot Password',
                                icon: 'pi pi-fw pi-question',
                                routerLink: ['/auth/forgotpassword'],
                            },
                            {
                                label: 'New Password',
                                icon: 'pi pi-fw pi-cog',
                                routerLink: ['/auth/newpassword'],
                            },
                            {
                                label: 'Verification',
                                icon: 'pi pi-fw pi-envelope',
                                routerLink: ['/auth/verification'],
                            },
                            {
                                label: 'Lock Screen',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/auth/lockscreen'],
                            },
                        ],
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud'],
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline'],
                    },
                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/pages/invoice'],
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/aboutus'],
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help'],
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty'],
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/pages/faq'],
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/pages/contact'],
                    },
                ],
            },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['ecommerce/product-overview'],
                    },
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['ecommerce/product-list'],
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['ecommerce/new-product'],
                    },
                    {
                        label: 'Shopping Cart',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['ecommerce/shopping-cart'],
                    },
                    {
                        label: 'Checkout Form',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['ecommerce/checkout-form'],
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['ecommerce/order-history'],
                    },
                    {
                        label: 'Order Summary',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['ecommerce/order-summary'],
                    },
                ],
            },
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/list'],
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create'],
                    },
                ],
            },
            {
                label: 'Hierarchy',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Start',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now',
                        icon: 'pi pi-fw pi-shopping-cart',
                    },
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/documentation'],
                    },
                ],
            },
        ];
    }

    async newTabCreate(
        label: string,
        routeTab: string,
        templateRoute: any,
        serviceCode: number,
        actionCode: string,
        typePage: string
    ) {
        const config =
            this.menuConfig[templateRoute as keyof typeof this.menuConfig];
        console.log(config);

        /* NÃO DELETAR  const propertyToUpdate = config.btnState;
        if (propertyToUpdate) {
          this.buttonStates[propertyToUpdate] = this.buttonStateService.updateButtonState(config);
          console.log(this.buttonStates[propertyToUpdate])
        } */

        /*  if (config?.templateRoute === 'CompanyGroup') {
           this.btnStateCompanyGroup$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'UsersGroup') {
           this.btnStateUsersGroup$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Companies') {
           this.btnStateCompanies$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Users') {
           this.btnStateUsers$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Permissions') {
           this.btnStatePermissions$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Administrator') {
           this.btnStateAdministrator$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Plans') {
           this.btnStatePlans$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CFOP') {
           this.btnStateCFOP$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'NCM') {
           this.btnStateNCM$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'GENERO') {
           this.btnStateGENERO$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CEST') {
           this.btnStateCEST$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CONTA_SPED') {
           this.btnStateCONTA_SPED$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'SERVICOS') {
           this.btnStateSERVICOS$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'GNRE') {
           this.btnStateGNRE$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CST_ICMS') {
           this.btnStateCST_ICMS$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CSOSN') {
           this.btnStateCSOSN$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CST_IPI') {
           this.btnStateCST_IPI$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CEL_IPI') {
           this.btnStateCEL_IPI$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CST_PIS') {
           this.btnStateCST_PIS$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CST_COFINS') {
           this.btnStateCST_COFINS$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'CST_ISS') {
           this.btnStateCST_ISS$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Country') {
           this.btnStateCountry$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'States') {
           this.btnStateStates$ = this.buttonStateService.updateButtonState(config);
         }
         else if (config?.templateRoute === 'Cities') {
           this.btnStateCities$ = this.buttonStateService.updateButtonState(config);
         } */

        try {
            this.dataTab = {
                label,
                routeTab,
                templateRoute,
                serviceCode,
                actionCode,
                typePage,
            };
            this.actionButtonService.executeFunction(this.dataTab);
        } catch (error) {
            console.error('Erro ao obter dados da API:', error);
        }
    }
}
