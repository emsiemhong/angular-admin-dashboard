import {
  Component,
  NgZone,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { MenuService } from '@core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  providers: [MenuService],
})
export class SidemenuComponent {
  currentLang = 'en';

  constructor(public menuService: MenuService) {
    // this.addMenuItem();
  }

  addMenuItem(): void {
    this.menuService.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'timeline', name: 'MENU' },
      ],
    });
  }
}