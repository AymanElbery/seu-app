import { Routes } from '@angular/router';
import { ContactEnquireComponent } from './components/contact-enquire/contact-enquire.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactLayoutComponent } from './components/contact-layout/contact-layout.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const componentDeclarations: any[] = [
    ContactLayoutComponent, ContactPageComponent,
    ContactInfoComponent, ContactFormComponent,
    ContactEnquireComponent, ContactHeaderComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: '',
        component: ContactLayoutComponent
    }
];
