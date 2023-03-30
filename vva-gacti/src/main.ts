import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CONFIG, IConfig } from './app/config/config';

fetch('/assets/config/config.json')
  .then(response => response.json())
  .then((config: IConfig) => {
    platformBrowserDynamic([{ provide: CONFIG, useValue: config }])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
