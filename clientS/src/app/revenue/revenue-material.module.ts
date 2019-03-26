import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule, MatButtonModule } from '@angular/material';

const modules = [MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule, MatButtonModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class RevenueMaterialModule { }