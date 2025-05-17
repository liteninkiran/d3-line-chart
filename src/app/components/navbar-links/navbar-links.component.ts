import { Component } from '@angular/core';
import { NavbarLink } from 'src/app/types/internal';

@Component({
    selector: 'app-navbar-links',
    templateUrl: './navbar-links.component.html',
    styleUrls: ['./navbar-links.component.scss'],
})
export class NavbarLinksComponent {

    public config: NavbarLink[] = [
        {
            link: '/home',
            icon: 'home',
            text: 'Home',
        },
        {
            link: '/scratch',
            icon: 'construction',
            text: 'Scratch',
        },
    ]
}
