import { NgModule } from 'node_modules/@angular/core';
import { BrowserModule } from 'node_modules/@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from 'node_modules/@angular/forms';
import { BrowserAnimationsModule } from 'node_modules/@angular/platform-browser/animations';
import { FlexLayoutModule } from 'node_modules/@angular/flex-layout';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from 'node_modules/@angular/material';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { PeopleService } from './services/people.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FilesComponent } from './files/files.component';
import { DialogComponent } from './dialog/dialog.component';

// ROUTING
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'files', component: FilesComponent },
  { path: '**', component: HomeComponent }
];

// MODULES
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // ROUTING
    RouterModule.forRoot(
      appRoutes
      //  { enableTracing: true } // <-- debugging purposes only
    )
  ], // end imports
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    DialogComponent,
    FilesComponent
  ],
  bootstrap: [AppComponent],
  providers: [PeopleService],
  entryComponents: [DialogComponent]
})
export class AppModule {}
