import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 template: `
 Mars Colony
 <a routerLink="/register">Register page</a>
 <a routerLink="/encounters">Encounters page</a>
 <a routerLink="/report">Report page</a>
 <a routerLink="/notFound">Not found page</a>
 <router-outlet></router-outlet>
 `,
 styleUrls: ['./app.component.scss']
})
export class AppComponent {

}


