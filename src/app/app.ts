import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VERSIONS } from './versions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <p class="brand">Angular Updates</p>
      @for (v of versions; track v.version) {
        <a [routerLink]="['/', v.version]" routerLinkActive="active">
          v{{ v.version }} <small>{{ v.released.slice(0, 4) }}</small>
        </a>
      }
      <a class="repo" href="https://github.com/burhanrepos/angular-updates" target="_blank" rel="noopener">GitHub ↗</a>
    </nav>
    <main><router-outlet /></main>
  `,
})
export class App {
  protected readonly versions = VERSIONS;
}
