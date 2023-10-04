import { Component } from '@angular/core';
import type { ComponentProps } from 'react';
import { LazyReactComponentDirective } from '../LazyReactComponentDirective';

@Component({
  selector: 'select-react-component',
  standalone: true,
  imports: [LazyReactComponentDirective],
  template: `<div [lazyReactComponent]="Select" [props]="selectProps"></div>`,
})
export class SelectReactComponent {
  Select = () => import('antd/lib/select').then((m) => m.default);
  selectProps: ComponentProps<any> = {
    onChange(v: any) {
      console.log(v);
    },
    size: 'large',
    style: { width: '50%' },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  };
}
