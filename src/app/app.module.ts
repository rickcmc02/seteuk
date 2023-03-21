import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './sidenav/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TitleComponent } from './content/title/title.component';
import { EmptyComponent } from './content/empty/empty.component';
import { TaxBillComponent } from './content/tax-bill/tax-bill.component';
import { TableComponent } from './content/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    TitleComponent,
    EmptyComponent,
    TaxBillComponent,
    TableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
