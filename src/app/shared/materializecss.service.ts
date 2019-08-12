import {ElementRef} from '@angular/core';

declare var M

export class MaterializecssService {

  static initializeSidenav(ref: ElementRef) {
    M.Sidenav.init(ref.nativeElement)
  }
}
