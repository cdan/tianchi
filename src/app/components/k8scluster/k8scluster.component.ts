import { Component, OnInit } from '@angular/core';
import { K8s } from './k8s';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { K8sService } from './k8s.service'

@Component({
  selector: 'app-k8scluster',
  templateUrl: './k8scluster.component.html',
  styleUrls: ['./k8scluster.component.scss']
})
export class K8sclusterComponent implements OnInit {
	//Component properties
	allK8s: K8s[];
	statusCode: number;
	requestProcessing = false;
	articleIdToUpdate = null;
	processValidation = false;
	//Create form
	k8sForm = new FormGroup({
		name: new FormControl('', Validators.required),
		kubeconf: new FormControl('', Validators.required)
	});
	//Create constructor to get service instance
	constructor(private k8sService: K8sService) {
	}
	//Create ngOnInit() and and load articles
	ngOnInit(): void {
		this.getAllK8s();
	}
	//Fetch all articles
	getAllK8s() {
		this.k8sService.getAllK8s()
			.subscribe(
				data => this.allK8s = data,
				errorCode => this.statusCode = errorCode);
	}
	//Handle create and update article
	onK8sFormSubmit() {
		this.processValidation = true;
		if (this.k8sForm.invalid) {
			return; //Validation failed, exit from method.
		}
		//Form is valid, now perform create or update
		this.preProcessConfigurations();
		let k8s = this.k8sForm.value;
		if (this.articleIdToUpdate === null) {
			//Generate article id then create article
			this.k8sService.getAllK8s()
				.subscribe(articles => {
					//Generate article id (logic is for demo)	 
					let maxIndex = articles.length - 1;
					let articleWithMaxIndex = articles[maxIndex];
					let articleId = articleWithMaxIndex.id + 1;
					k8s.id = articleId;

					//Create k8s
					this.k8sService.createK8s(k8s)
						.subscribe(statusCode => {
							//Expecting success code 201 from server
							this.statusCode = statusCode;
							this.getAllK8s();
							this.backToCreateK8s();
						},
							errorCode => this.statusCode = errorCode
						);
				});
		} else {
			//Handle update k8s
			k8s.id = this.articleIdToUpdate;
			this.k8sService.updateK8s(k8s)
				.subscribe(statusCode => {
					//this.statusCode = statusCode;
					//Expecting success code 204 from server
					this.statusCode = 200;
					this.getAllK8s();
					this.backToCreateK8s();
				},
					errorCode => this.statusCode = errorCode);
		}
	}
	//Load article by id to edit
	loadK8sToEdit(articleId: string) {
		this.preProcessConfigurations();
		this.k8sService.getK8sById(articleId)
			.subscribe(k8s => {
				this.articleIdToUpdate = k8s.id;
				this.k8sForm.setValue({ name: k8s.name, kubeconf: k8s.kubeconf });
				this.processValidation = true;
				this.requestProcessing = false;
			},
				errorCode => this.statusCode = errorCode);
	}
	//Delete k8s
	deleteK8sById(articleId: string) {
		this.preProcessConfigurations();
		this.k8sService.deleteK8sById(articleId)
			.subscribe(successCode => {
				//this.statusCode = successCode;
				//Expecting success code 204 from server
				this.statusCode = 204;
				this.getAllK8s();
				this.backToCreateK8s();
			},
				errorCode => this.statusCode = errorCode);
	}
	//Perform preliminary processing configurations
	preProcessConfigurations() {
		this.statusCode = null;
		this.requestProcessing = true;
	}
	//Go back from update to create
	backToCreateK8s() {
		this.articleIdToUpdate = null;
		this.k8sForm.reset();
		this.processValidation = false;
	}
}

