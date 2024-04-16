import {Routes} from '@angular/router';
import {AccountsComponent} from "./features/dashboard/accounts/accounts.component";
import {DashboardComponent} from "./features/dashboard/dashboard/dashboard.component";
import {ContactsComponent} from "./features/dashboard/contacts/contacts.component";
import {DocumentsComponent} from "./features/dashboard/documents/documents.component";
import {InvoicesComponent} from "./features/dashboard/invoices/invoices.component";
import {OverviewComponent} from "./features/dashboard/overview/overview.component";
import {ReportsComponent} from "./features/dashboard/reports/reports.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'accounts', component: AccountsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'documents', component: DocumentsComponent},
      {path: 'invoices', component: InvoicesComponent},
      {path: 'overview', component: OverviewComponent},
      {path: 'reports', component: ReportsComponent}
    ]
  }
];
