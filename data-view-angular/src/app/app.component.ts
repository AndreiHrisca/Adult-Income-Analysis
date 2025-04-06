import { Component } from '@angular/core';
import { DataViewComponent } from './DataView.component';

@Component({
  standalone: true,
  imports: [DataViewComponent],
  selector: 'app-root',
  template: `<app-data-view></app-data-view>`,
})
export class AppComponent {}