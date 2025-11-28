import { Routes } from '@angular/router';
import { Home } from './components/home';
import { Service } from './components/service';
import { Contact } from './components/contact';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', component: Home },
	{ path: 'service', component: Service },
	{ path: 'contact', component: Contact },
	{ path: '**', redirectTo: '' }
];
