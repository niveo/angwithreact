import { Component } from '@angular/core';
import type { ComponentProps } from 'react';
import { LazyReactComponentDirective } from '../LazyReactComponentDirective';
@Component({
  selector: 'button-react-component',
  standalone: true,
  imports: [LazyReactComponentDirective],
  template: `<div [lazyReactComponent]="Button" [props]="props"></div>`,
})
export class ButtonReactComponent {
  Button = () => import('../button/AmsRCButton').then((m) => m.AmsRCButton);

  props: ComponentProps<any> = {
    content: '<span class="anticon material-symbols-outlined">home</span>',
    size: 'large',
    style: { width: '50%' },
    type: 'primary',
    onClick(v: any) {
      console.log(v);
    },
  };
}