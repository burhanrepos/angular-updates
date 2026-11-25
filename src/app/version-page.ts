import { Component, computed, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VERSIONS } from './versions';
import { DEMOS } from './demos';

@Component({
  selector: 'app-version-page',
  imports: [NgComponentOutlet, RouterLink],
  template: `
    @if (info(); as v) {
      <header>
        <h1>Angular {{ v.version }}</h1>
        <p class="meta">Released {{ v.released }} · {{ v.tagline }}</p>
      </header>

      <section>
        <h2>Highlights</h2>
        <ul class="highlights">
          @for (h of v.highlights; track h.title) {
            <li><strong>{{ h.title }}</strong> — {{ h.summary }}</li>
          }
        </ul>
        <a [href]="'https://github.com/angular/angular/releases/tag/' + v.version + '.0.0'" target="_blank" rel="noopener">
          Full release notes ↗
        </a>
      </section>

      @if (demo(); as d) {
        <section class="demo">
          <h2>Live demo</h2>
          <ng-container *ngComponentOutlet="d" />
          <p class="source">Source: <code>src/app/demos.ts</code></p>
        </section>
      }
    } @else {
      <p>Unknown version. <a routerLink="/">Back to all versions</a></p>
    }
  `,
})
export class VersionPage {
  readonly version = input.required<string>();
  protected readonly info = computed(() => VERSIONS.find((v) => v.version === Number(this.version())));
  protected readonly demo = computed(() => DEMOS[Number(this.version())]);
}
