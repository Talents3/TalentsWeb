import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from "@angular/router";
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { Education } from '../../models/education.model';
import { Experience } from '../../models/experience.model';
import * as _ from 'lodash';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';// for file uploading

const URL = 'http://talents3.com/api/v1/upload/';   //hard code an address
const TRANSURL = 'http://talents3.com/api/v1/transcripts/'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User
  editIntroCardData = {
    username: '',
    address: '',
    age: 0,
    description:'',
    isMale: false,
    phone: '',
    newGrads: false,
    id: 0,
    image: '',
    needVisaSponsor: false
  };
  IMAGEDIR = 'http://talents3.com/api/v1/getImages/'; // image 
  Transcripts = 'http://talents3.com/api/v1/getTranscripts/'; // transcripts
  educations: Education[];
  experiences: Experience[];
  selectedExperience: any;
  isEmptyExperience: boolean;
  selectedEducation: any;
  isAddingEducation: boolean;
  uploader: FileUploader ;
  transcriptUploader: FileUploader;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.dataService.getUser(+params['id'])
       .then(user => {
            this.user = user;
            this.editIntroCardData.username = user.username;
            this.editIntroCardData.age = user.age;
            this.editIntroCardData.description = user.description;
            this.editIntroCardData.isMale = user.isMale;
            this.editIntroCardData.phone = user.phone;
            this.editIntroCardData.id = user.id;
            this.editIntroCardData.needVisaSponsor= user.needVisaSponsor;
            this.editIntroCardData.newGrads = user.newGrads;
            this.editIntroCardData.image = user.image;
            this.editIntroCardData.address = user.address;    
        });
    });

  }
  initTranscriptUPloader(){
    this.transcriptUploader = new FileUploader({url:TRANSURL , itemAlias: 'transcript'});
    this.transcriptUploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.transcriptUploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         var obj = JSON.parse(response);
         this.selectedEducation.transcripts = obj.filename;
         console.log(this.editIntroCardData.image);
         console.log('ImageUpload:uploaded:', response);
         alert('File uploaded successfully');
       
     };   // upload transcript file method
  }  

  deleteEducation(): void {
        console.log(this.selectedEducation);
        // delete this education by parsing its id
        this.dataService.deleteEducation(this.selectedEducation._id)
          .then(education => {
              console.log("Delete: " + education);
              this.dataService.getUser(this.user.id)
                .then(user => {
                    this.user = user;
                })
          })
  }

  editEducation(input: any): void{   //edit education button pressed
    this.selectedEducation = _.cloneDeep(input);
    this.isAddingEducation = false;
    this.initTranscriptUPloader();

  }

  addEducation(): void {
    var emptyEducation = {
        userEmail: localStorage.getItem("email"),  
        universityName: '',
        gpa: 0,
        degreeType: '',
        major: '',
        startDate: '',
        endDate: '',
        inProgress: false,
        transcripts: '',
        courses: []
    }
    
     this.selectedEducation = emptyEducation;
     this.isAddingEducation = true;
     this.initTranscriptUPloader();

  }

  saveEducation(): void {
      console.log(this.selectedEducation); // save this updated education
      if (this.isAddingEducation) {
          this.dataService.addEducation(this.selectedEducation)
            .then(education => {
                console.log("Add education : " + education.universityName);
                this.dataService.getUser(this.user.id)
                  .then(user => {
                    this.user = user;
                  });
            });
      } else {
          this.dataService.modifyEducation(this.selectedEducation)
            .then(education => {
                console.log("Modify education :" + education.universityName);
                this.dataService.getUser(this.user.id)
                  .then(user => {
                    this.user = user;
                  });
            });
      }
  }

  deleteExperience(): void {
    console.log(this.selectedExperience);
            // delete this education by parsing its id
    this.dataService.deleteExperience(this.selectedExperience._id)
                    .then(experience => {
                      console.log("Delete: " + experience);
                      this.dataService.getUser(this.user.id)
                                      .then(user => {
                                        this.user = user;
                                      });
                    });
  }

  editExperience(input: any): void {
    this.isEmptyExperience = false;
    this.selectedExperience = _.cloneDeep(input);
    console.log(this.selectedExperience);
  }

  saveExperience(input:any): void {
    console.log(this.selectedExperience); // save this updated education
          if (this.isEmptyExperience) {
              this.dataService.addExperience(this.selectedExperience)
                .then(experience => {
                    console.log("Add experience : " + experience.companyName);
                    this.dataService.getUser(this.user.id)
                      .then(user => {
                        this.user = user;
                      });
                });
          } else {
              this.dataService.modifyExperience(this.selectedExperience)
                .then(experience => {
                    console.log("Modify experience :" + experience.companyName);
                    this.dataService.getUser(this.user.id)
                      .then(user => {
                        this.user = user;
                      });
                });
          }
  }

  initUploader(){   // after click on editIntro button init uploader
     this.uploader =   new FileUploader({url: URL , itemAlias: 'photo'});
     this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         var obj = JSON.parse(response);
         this.editIntroCardData.image = obj.filename;
         console.log(this.editIntroCardData.image);
         console.log('ImageUpload:uploaded:', response);
         alert('File uploaded successfully');
       
     };   // upload file method
  }
  addExperience(): void {
    var emptyExperience = {
      userEmail: localStorage.getItem("email"),  
      universityName: '',
      gpa: 0,
      degreeType: '',
      major: '',
      startDate: '',
      endDate: '',
      inProgress: false,
      transcripts: '',
      courses: []
    }
    this.selectedExperience = emptyExperience;
    this.isEmptyExperience = true;

  }

  isMatched() {  // check whether this profile is matched with the logged in user
     if (localStorage.getItem("email") === this.user.email) return true;
     else return false;
  }

  setVisa(input: any): void {    // edit need visa status
     if (input == "true") this.editIntroCardData.needVisaSponsor = true;
     else this.editIntroCardData.needVisaSponsor = false;
  }

  setNewGrad(input: any): void {  // edit new grad
      if (input == "true") this.editIntroCardData.newGrads = true;
      else this.editIntroCardData.newGrads = false;
  }

  setIsMale(input: any): void { // edit gender
      if(input == "true") this.editIntroCardData.isMale = true;
      else this.editIntroCardData.isMale = false;
  }

  editIntroCard() {  // checkout if intro card has been changed

      if(this.editIntroCardData.username != this.user.username) {
        this.sendEditIntroData();
      } else if(this.editIntroCardData.age != this.user.age) {
        this.sendEditIntroData();
      } else if (this.editIntroCardData.description !=this.user.description){
        this.sendEditIntroData();
      } else if (this.editIntroCardData.isMale != this.user.isMale) {
        this.sendEditIntroData();
      } else if (this.editIntroCardData.phone != this.user.phone) {
        this.sendEditIntroData();
      } else if (this.editIntroCardData.newGrads != this.user.newGrads) {
        this.sendEditIntroData();
      } else if (this.editIntroCardData.needVisaSponsor != this.user.needVisaSponsor) {
        this.sendEditIntroData();
      } else if (this.editIntroCardData.image != this.user.image){
        this.sendEditIntroData();
      } else if (this.editIntroCardData.address != this.user.address){
        this.sendEditIntroData();
      } else console.log("did not modify your intro card:",this.user.image);
  }

  sendEditIntroData() {  // send modified intro card to backend server

       console.log(this.editIntroCardData);
       this.dataService.modifyUser(this.editIntroCardData)
       .then(user => {
         this.dataService.getUser(user.id)
         .then(newUser => {
           this.user = newUser;
           this.router.navigateByUrl(`users/${this.user.id}`)
         });
       });
  }

}
