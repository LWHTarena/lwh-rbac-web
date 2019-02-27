import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry} from '@angular/material';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';

    ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/fullscreen-exit.svg'));
};
