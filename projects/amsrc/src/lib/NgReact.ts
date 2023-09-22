import { Injectable, Injector, inject } from '@angular/core';
import { ComponentProps, ElementType, createElement } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { NgContext } from './NgContext';

/**
 * 
 * 
    private ngReact = inject(NgReact);
    private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

    ngOnInit() {
      this.ngReact.render(this.root, AmsRCButton, {
        content: 'TESTE',
      });
    }

    ngOnDestroy() {
      this.root.unmount();
    }
 */
@Injectable({ providedIn: 'root' })
export class NgReact {
  injector = inject(Injector);

  createRoot(host: HTMLElement) {
    return createRoot(host);
  }

  render<Comp extends ElementType>(
    root: Root,
    Comp: Comp,
    compProps?: ComponentProps<Comp>
  ) {
    root.render(
      createElement(
        NgContext,
        {
          injector: this.injector,
        },
        createElement(Comp, compProps)
      )
    );
  }
}
