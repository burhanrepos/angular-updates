import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { VERSIONS } from './versions';
import { DEMOS } from './demos';

describe('App', () => {
  it('lists every version in the nav', async () => {
    await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('nav a');
    expect(links.length).toBe(VERSIONS.length + 1); // + GitHub link
  });

  it('has a demo for every version', () => {
    for (const v of VERSIONS) expect(DEMOS[v.version]).toBeDefined();
  });
});
