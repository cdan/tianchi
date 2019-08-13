import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
      imports: [
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
            InMemoryWebApiModule.forRoot(TestData)
      ],
      declarations: [
      ],
      providers: [],
      bootstrap: [
      ]
})
export class K8sclusterModule { }
