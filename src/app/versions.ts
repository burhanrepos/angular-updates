export interface Highlight {
  title: string;
  summary: string;
}

export interface AngularVersion {
  version: number;
  released: string;
  tagline: string;
  highlights: Highlight[];
}

export const VERSIONS: AngularVersion[] = [
  {
    version: 22,
    released: '2026-06-03',
    tagline: 'OnPush by default, Signal Forms stable',
    highlights: [
      { title: 'OnPush is the default', summary: 'Components without a changeDetection setting are now OnPush. Use ChangeDetectionStrategy.Eager to keep the old behavior.' },
      { title: 'Signal Forms are public API', summary: 'form(), FormField and the validation rules from @angular/forms/signals graduate from experimental.' },
      { title: 'debounced()', summary: 'Debounce any signal; the result is a Resource you read with .value().' },
      { title: 'injectAsync()', summary: 'Lazy-load a service with a dynamic import and inject it when it is needed.' },
      { title: '@Service decorator', summary: 'A shorter way to declare an injectable service.' },
      { title: 'Fetch is the default HttpClient backend', summary: 'withFetch() is deprecated. Use withXhr() if you need upload progress events.' },
      { title: 'Template type-checking', summary: 'Exhaustive @switch checks and the instanceof operator in templates.' },
      { title: 'Housekeeping', summary: 'TypeScript 6 required, Hammer.js integration and ComponentFactoryResolver removed, incremental hydration on by default.' },
    ],
  },
  {
    version: 21,
    released: '2025-11-19',
    tagline: 'Signal Forms (experimental), zoneless by default',
    highlights: [
      { title: 'Signal Forms (experimental)', summary: 'A new forms API built on signals: a form() built from a signal model, with schema-based validation.' },
      { title: 'Zoneless for new apps', summary: 'ng new creates apps without zone.js.' },
      { title: 'Vitest is the default test runner', summary: 'New projects use Vitest instead of Karma and Jasmine.' },
      { title: 'Angular Aria (developer preview)', summary: 'Headless, accessible UI primitives you style yourself.' },
      { title: 'Migrations', summary: 'Schematics to replace ngClass and ngStyle with class and style bindings.' },
    ],
  },
  {
    version: 20,
    released: '2025-05-28',
    tagline: 'Signals stable, httpResource, zoneless preview',
    highlights: [
      { title: 'Stable signal APIs', summary: 'effect(), linkedSignal() and toSignal() are stable.' },
      { title: 'Zoneless (developer preview)', summary: 'provideZonelessChangeDetection() replaces the experimental provider.' },
      { title: 'httpResource (experimental)', summary: 'HTTP requests as a signal-based resource.' },
      { title: 'Template expressions', summary: 'Exponent (**), void, and template literals in templates.' },
      { title: 'Incremental hydration stable', summary: 'Hydrate @defer blocks only when they are needed.' },
    ],
  },
  {
    version: 19,
    released: '2024-11-19',
    tagline: 'Standalone by default, linkedSignal, resource',
    highlights: [
      { title: 'Standalone by default', summary: 'standalone: true is no longer needed on components, directives and pipes.' },
      { title: 'linkedSignal() (experimental)', summary: 'A writable signal that resets when its source changes.' },
      { title: 'resource() (experimental)', summary: 'Load async data as signals with value, status and error.' },
      { title: 'Incremental hydration (preview)', summary: 'hydrate triggers on @defer blocks.' },
      { title: 'Style HMR', summary: 'Hot module replacement for component styles is on by default.' },
    ],
  },
  {
    version: 18,
    released: '2024-05-22',
    tagline: 'Experimental zoneless, @let',
    highlights: [
      { title: 'Experimental zoneless', summary: 'Run change detection without zone.js.' },
      { title: '@let (18.1)', summary: 'Declare local variables in templates.' },
      { title: 'ng-content fallback', summary: 'Default content when nothing is projected.' },
      { title: 'Function redirects', summary: 'redirectTo can be a function.' },
      { title: 'Material 3 stable', summary: 'Angular Material moves to Material Design 3.' },
    ],
  },
  {
    version: 17,
    released: '2023-11-08',
    tagline: 'Built-in control flow and @defer',
    highlights: [
      { title: 'Control flow', summary: '@if, @for and @switch replace *ngIf, *ngFor and ngSwitch.' },
      { title: '@defer', summary: 'Lazy-load parts of a template on viewport, interaction, idle or a timer.' },
      { title: 'Vite + esbuild builder', summary: 'The application builder is the default for new projects.' },
      { title: 'angular.dev', summary: 'New documentation site and logo.' },
      { title: 'Signal inputs, model(), output() (17.1–17.3)', summary: 'Signal-based component APIs arrive in minor releases.' },
    ],
  },
  {
    version: 16,
    released: '2023-05-03',
    tagline: 'Signals arrive',
    highlights: [
      { title: 'Signals (developer preview)', summary: 'signal(), computed() and effect().' },
      { title: 'Required inputs', summary: '@Input({ required: true }).' },
      { title: 'takeUntilDestroyed / DestroyRef', summary: 'Clean up subscriptions without ngOnDestroy.' },
      { title: 'Router inputs', summary: 'withComponentInputBinding() binds route params to inputs.' },
      { title: 'Non-destructive hydration (preview)', summary: 'SSR reuses the server-rendered DOM.' },
    ],
  },
  {
    version: 15,
    released: '2022-11-16',
    tagline: 'Standalone stable, directive composition',
    highlights: [
      { title: 'Standalone APIs stable', summary: 'Build apps without NgModules.' },
      { title: 'Directive composition API', summary: 'hostDirectives adds directive behavior to a component.' },
      { title: 'NgOptimizedImage stable', summary: 'Image best practices built in.' },
      { title: 'Functional guards', summary: 'Router guards as plain functions.' },
    ],
  },
  {
    version: 14,
    released: '2022-06-02',
    tagline: 'Typed forms, standalone preview',
    highlights: [
      { title: 'Typed reactive forms', summary: 'FormControl and FormGroup know their value types.' },
      { title: 'Standalone components (preview)', summary: 'The first step away from NgModules.' },
      { title: 'inject() in more places', summary: 'Use inject() in field initializers and functions.' },
      { title: 'Route titles', summary: 'Set the page title from the route config.' },
    ],
  },
];
