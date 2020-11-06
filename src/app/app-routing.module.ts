import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { CompleteComponent } from './registration/complete/complete.component';
import { CreateMeComponent } from './registration/create-me/create-me.component';
import { CreateChildComponent } from './registration/create-child/create-child.component';
import { CreateClubComponent } from './clubs/create-club/create-club.component';
import { BrowseClubsComponent } from './clubs/browse-clubs/browse-clubs.component';
import { ShowClubComponent } from './clubs/show-club/show-club.component';
import { ShowApplicationsComponent } from './memberships/show-applications/show-applications.component';
import { ShowApplicationComponent } from './memberships/show-application/show-application.component';
import { ApproveApplicationComponent } from './memberships/approve-application/approve-application.component';
import { ShowPersonComponent } from './person/show-person/show-person.component';
import { RequestMembershipComponent } from './memberships/request-membership/request-membership.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'complete/:id', component: CompleteComponent },
  { path: 'createMe', component: CreateMeComponent },
  { path: 'createClub', component: CreateClubComponent },
  { path: 'browseClubs', component: BrowseClubsComponent },
  { path: 'club/:id', component: ShowClubComponent },
  { path: 'club/:id/requestMembership', component: RequestMembershipComponent },
  { path: 'club/:id/membershipApplications', component: ShowApplicationsComponent },
  { path: 'club/:id/membershipApplications/:applicationId', component: ShowApplicationComponent },
  { path: 'club/:id/approveApplication/:applicationId', component: ApproveApplicationComponent },
  { path: 'person/:id', component: ShowPersonComponent },
  { path: 'person/:id/createChild', component: CreateChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
