import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import { RecruiterActivityComponent } from './recruiter-activity/recruiter-activity.component';
import { RecruiterPostComponent } from './recruiter-post/recruiter-post.component';
import { RecruiterNetworkComponent } from './recruiter-network/recruiter-network.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { RecruiterProfileSettingsComponent } from './recruiter-profile-settings/recruiter-profile-settings.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterPostComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports : [
    RecruiterActivityComponent,
    RecruiterDashboardComponent,
    RecruiterNetworkComponent,
    RecruiterPostComponent,
    RecruiterProfileComponent,
    RecruiterProfileSettingsComponent
  ]
})
export class RecruiterModule { }
