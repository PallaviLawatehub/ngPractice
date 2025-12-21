import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ServiceComponent } from './components/service/service';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', component: Home },
	{ path: 'service', component: ServiceComponent },
	{ path: 'contact', component: Contact },
	{ path: '**', redirectTo: '' }
];
