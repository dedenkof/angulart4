import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Angular запускає AppComponent через bootstrapApplication із main.ts.
// Він рендерить app.component.html, замінюючи <app-root> в index.html на вміст шаблону.