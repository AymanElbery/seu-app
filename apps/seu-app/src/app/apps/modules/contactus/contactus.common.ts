import { Routes } from '@angular/router';
import { ContactEnquireComponent } from './components/contact-enquire/contact-enquire.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactLayoutComponent } from './components/contact-layout/contact-layout.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactFooterComponent } from './components/contact-footer/contact-footer.component';
import { ContactSuggestComponent } from './components/contact-suggest/contact-suggest.component';
import { ContactFooterEnComponent } from './components/contact-footer-en/contact-footer-en.component';
import { ContactHeaderEnComponent } from './components/contact-header-en/contact-header-en.component';

export const componentDeclarations: any[] = [
    ContactLayoutComponent, ContactPageComponent,
    ContactInfoComponent, ContactFormComponent, ContactSuggestComponent,
    ContactEnquireComponent, ContactHeaderComponent, ContactFooterComponent,
    ContactFooterEnComponent, ContactHeaderEnComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: ContactLayoutComponent
    },
    {
        path: 'form',
        component: ContactLayoutComponent
    }
];
