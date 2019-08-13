import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { K8sclusterComponent } from './components/k8scluster/k8scluster.component';
import { VsphereclusterComponent } from './components/vspherecluster/vspherecluster.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { DeploymentComponent } from './components/deployment/deployment.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'k8sclusters', component: K8sclusterComponent },
  { path: 'vsphereclusters', component: VsphereclusterComponent },
  { path: 'pipelines', component: PipelineComponent },
  { path: 'deployments', component: DeploymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
