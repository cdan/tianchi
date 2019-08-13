import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      { id: 101, name: 'k8s1', kubeconf: '1111' },
      { id: 102, name: 'k8s2', kubeconf: '2222' },
      { id: 103, name: 'k8s3', kubeconf: '3333' }
    ];
    return { k8s: articleDetails };
  }
}