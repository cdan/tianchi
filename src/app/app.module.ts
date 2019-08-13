import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogComponent } from './components/catalog/catalog.component';
import { K8sclusterComponent } from './components/k8scluster/k8scluster.component';
import { VsphereclusterComponent } from './components/vspherecluster/vspherecluster.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { DeploymentComponent } from './components/deployment/deployment.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './components/k8scluster/test-data';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    K8sclusterComponent,
    VsphereclusterComponent,
    PipelineComponent,
    DeploymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
