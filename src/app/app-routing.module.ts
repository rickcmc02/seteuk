import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './content/empty/empty.component';
import { TaxBillComponent } from './content/tax-bill/tax-bill.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/40', pathMatch: 'full' },
  { path: '40', component: TaxBillComponent },
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
