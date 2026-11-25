import { Component, Directive, Type, computed, debounced, effect, linkedSignal, resource, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField, email, form, required } from '@angular/forms/signals';

// v14: typed reactive forms
@Component({
  selector: 'demo-14',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="profile">
      <input formControlName="name" placeholder="Name" />
      <input formControlName="age" type="number" placeholder="Age" />
    </form>
    <p>profile.value is typed as <code>{{ '{' }} name: string; age: number {{ '}' }}</code></p>
    <pre>{{ profile.getRawValue() | json }}</pre>
  `,
})
class Demo14 {
  profile = new FormGroup({
    name: new FormControl('Burhan', { nonNullable: true }),
    age: new FormControl(28, { nonNullable: true }),
  });
}

// v15: directive composition
@Directive({ selector: '[highlight]', host: { style: 'background: #fff3c4; padding: 8px; display: block' } })
class Highlight {}

@Directive({ selector: '[bold]', host: { style: 'font-weight: 700' } })
class Bold {}

@Component({
  selector: 'demo-card',
  hostDirectives: [Highlight, Bold],
  template: `This card gets both directives through hostDirectives.`,
})
class Card {}

@Component({ selector: 'demo-15', imports: [Card], template: `<demo-card />` })
class Demo15 {}

// v16: signals
@Component({
  selector: 'demo-16',
  template: `
    <button (click)="count.update(c => c + 1)">Clicked {{ count() }} times</button>
    <p>Double: {{ double() }}</p>
    <p>Last effect run: {{ log() }}</p>
  `,
})
class Demo16 {
  count = signal(0);
  double = computed(() => this.count() * 2);
  log = signal('');
  constructor() {
    effect(() => this.log.set(`count changed to ${this.count()}`));
  }
}

// v17: control flow and @defer
@Component({
  selector: 'demo-17',
  template: `
    <button (click)="items.update(i => [...i, 'Item ' + (i.length + 1)])">Add</button>
    <button (click)="items.set([])">Clear</button>
    <ul>
      @for (item of items(); track item) {
        <li>{{ item }}</li>
      } @empty {
        <li>No items</li>
      }
    </ul>
    @defer (on interaction) {
      <p>Loaded lazily after you clicked the placeholder.</p>
    } @placeholder {
      <p class="placeholder">Click me to load the deferred block</p>
    }
  `,
})
class Demo17 {
  items = signal(['Item 1', 'Item 2']);
}

// v18: @let and ng-content fallback
@Component({
  selector: 'demo-panel',
  template: `<ng-content>Default content shown when nothing is projected</ng-content>`,
})
class Panel {}

@Component({
  selector: 'demo-18',
  imports: [Panel],
  template: `
    @let total = price() * qty();
    <p>{{ qty() }} × {{ price() }} = <strong>{{ total }}</strong></p>
    <button (click)="qty.update(q => q + 1)">+1</button>
    <demo-panel />
    <demo-panel>Projected content</demo-panel>
  `,
})
class Demo18 {
  price = signal(12);
  qty = signal(2);
}

// v19: linkedSignal and resource
@Component({
  selector: 'demo-19',
  template: `
    <p>
      Category:
      <button (click)="category.set('fruit')">Fruit</button>
      <button (click)="category.set('veg')">Veg</button>
    </p>
    <p>Pick:
      @for (o of options(); track o) {
        <button (click)="picked.set(o)" [class.active]="picked() === o">{{ o }}</button>
      }
    </p>
    <p>linkedSignal value: <strong>{{ picked() }}</strong> (resets when the category changes)</p>
    <p>resource status: {{ price.status() }} — price: {{ price.value() ?? '…' }}</p>
  `,
})
class Demo19 {
  category = signal<'fruit' | 'veg'>('fruit');
  options = computed(() => (this.category() === 'fruit' ? ['Apple', 'Mango'] : ['Carrot', 'Peas']));
  picked = linkedSignal(() => this.options()[0]);
  price = resource({
    params: () => this.picked(),
    loader: async ({ params }) => {
      await new Promise((r) => setTimeout(r, 600));
      return `$${params.length}.00`;
    },
  });
}

// v20: new template expressions
@Component({
  selector: 'demo-20',
  template: `
    <p>2 ** {{ power() }} = {{ 2 ** power() }}</p>
    <button (click)="power.update(p => p + 1)">Increase power</button>
    <p>{{ \`Hello \${name()}, you are on Angular 20+\` }}</p>
  `,
})
class Demo20 {
  power = signal(3);
  name = signal('Burhan');
}

// v21/v22: Signal Forms
@Component({
  selector: 'demo-21',
  imports: [FormField],
  template: `
    <input [formField]="loginForm.email" placeholder="Email" />
    @if (loginForm.email().touched() && loginForm.email().invalid()) {
      @for (e of loginForm.email().errors(); track e.kind) {
        <p class="error">{{ e.kind }}</p>
      }
    }
    <p>Model: {{ model().email }} — form valid: {{ loginForm().valid() }}</p>
  `,
})
class Demo21 {
  model = signal({ email: '' });
  loginForm = form(this.model, (p) => {
    required(p.email);
    email(p.email);
  });
}

// v22: debounced()
@Component({
  selector: 'demo-22',
  template: `
    <input (input)="query.set($any($event.target).value)" placeholder="Type fast…" />
    <p>Live: {{ query() }}</p>
    <p>Debounced (500 ms): {{ settled.value() }}</p>
  `,
})
class Demo22 {
  query = signal('');
  settled = debounced(() => this.query(), 500);
}

export const DEMOS: Record<number, Type<unknown>> = {
  14: Demo14,
  15: Demo15,
  16: Demo16,
  17: Demo17,
  18: Demo18,
  19: Demo19,
  20: Demo20,
  21: Demo21,
  22: Demo22,
};
