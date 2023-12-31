import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FullNameAlumnoPipe } from './pipes/full-name-alumno.pipe';
import { ControlErrorMessagePipe } from './pipes/control-error-message.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    FullNamePipe,
    FullNameAlumnoPipe,
    ControlErrorMessagePipe,
    ResaltadoDirective,
    RepetirDirective,
  ],
  imports: [CommonModule],
  exports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    FullNamePipe,
    FullNameAlumnoPipe,
    ControlErrorMessagePipe,
    ResaltadoDirective,
    RepetirDirective,
    MatSelectModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
