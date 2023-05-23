import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { UserDirComponent } from './user-dir/user-dir.component';
import { PeriodicElemntsComponent } from './periodic-elemnts/periodic-elemnts.component';
import { UserTableComponent } from './user-table/user-table.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDirComponent,
    PeriodicElemntsComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
