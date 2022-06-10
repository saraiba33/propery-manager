import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'my-properties',
    component: MyPropertiesComponent,
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'my-properties/:id',
    component: PropertyComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
