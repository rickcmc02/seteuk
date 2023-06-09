import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './sidenav/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TitleComponent } from './content/title/title.component';
import { EmptyComponent } from './content/empty/empty.component';
import { TaxInvoiceComponent } from './content/tax-invoice/tax-invoice.component';
import { TableComponent } from './content/table/table.component';
import { ControlComponent } from './content/table/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    TitleComponent,
    EmptyComponent,
    TaxInvoiceComponent,
    TableComponent,
    ControlComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
