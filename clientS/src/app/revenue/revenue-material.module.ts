import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';

const modules = [MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class RevenueMaterialModule { }