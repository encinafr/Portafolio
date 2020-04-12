import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activeLang = 'es';
  public _opened: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
 

  constructor(private translate: TranslateService, private themeService: ThemeService) {
    this.translate.setDefaultLang(this.activeLang);
  }
  

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  //#region Translate
  public changeLanguage(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;

    console.log(active);
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
  //#endregion

}
