import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from "@angular/router";
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { Education } from '../../models/education.model';
import { Experience } from '../../models/experience.model';
import { Course } from '../../models/course.model';
import { Skill } from '../../models/skill.model';
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

  selectedExperience: any;
  isEmptyExperience: boolean;
  selectedEducation: any;
  isAddingEducation: boolean;
  selectedProject: any;
  isEmptyProject: boolean;
  uploader: FileUploader ;
  transcriptUploader: FileUploader;
  index = -1;
  course: any;
  addedCourses: any[] = [];

  skillIndex = -1;
  skill : any;
  addedSkills: any[] = [];
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getUser(+params['id'])
       .then(user => {
            if (user == null) {
                this.router.navigate(['404']);
            }
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
    this.addedCourses=[];
    this.course = null;
    this.index = -1;
    this.selectedEducation = _.cloneDeep(input);
    this.isAddingEducation = false;
    this.initTranscriptUPloader();
  }

  addEducation(): void {
    this.addedCourses=[];
    this.course = null;
    this.index = -1;
    var emptyEducation = {
        userEmail: localStorage.getItem("email")
    }
    this.selectedEducation = emptyEducation;
    this.isAddingEducation = true;
    this.initTranscriptUPloader();
  }

  saveEducation(): void {
      this.readCourses();
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
    this.addedSkills=[];
    this.skill = null;
    this.skillIndex = -1;
    this.isEmptyExperience = false;
    this.selectedExperience = _.cloneDeep(input);
  }

  saveExperience(input:any): void {// save this updated education
      this.readSkills();
          if (this.isEmptyExperience) {
              this.dataService.addExperience(this.selectedExperience)
                .then(experience => {
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
    this.addedSkills=[];
    this.skill = null;
    this.skillIndex = -1;
    var emptyExperience = {
      userEmail: localStorage.getItem("email")
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

  addProject(): void {
    this.addedSkills=[];
    this.skill = null;
    this.skillIndex = -1;

    var emptyProject = {
      userEmail: localStorage.getItem("email")
    }
    this.selectedProject = emptyProject;
    this.isEmptyProject = true;
  }

  editProject(input: any): void {
    this.addedSkills=[];
    this.skill = null;
    this.skillIndex = -1;
    this.isEmptyProject = false;
    this.selectedProject = _.cloneDeep(input);
  }

  deleteProject(): void {
            // delete this education by parsing its id
    this.dataService.deleteProject(this.selectedProject._id)
                    .then(project => {
                      console.log("Delete: " + project);
                      this.dataService.getUser(this.user.id)
                                      .then(user => {
                                        this.user = user;
                                      });
                    });
  }

  saveProject(input:any): void {// save this updated education
    this.readProjectSkills();
    console.log(this.selectedProject);
          if (this.isEmptyProject) {
              this.dataService.addProject(this.selectedProject)
                .then(project => {
                    console.log("Add Project : " + project.projectName);
                    this.dataService.getUser(this.user.id)
                      .then(user => {
                        this.user = user;
                      });
                });
          } else {
              this.dataService.modifyProject(this.selectedProject)
                .then(project => {
                    console.log("Modify project :" + project.projectName);
                    this.dataService.getUser(this.user.id)
                      .then(user => {
                        this.user = user;
                      });
                });
          }
  }

  addCourse() {
    var course = {
      courseName: '',
      courseCode: '',
      coursegrade: ''
    }
    this.index = this.index + 1;
    this.addedCourses[this.index] = course;
  }

  deleteCourse(course) {
    var index = this.selectedEducation.courses.indexOf(course, 0);
    if (index > -1) {
      this.selectedEducation.courses.splice(index, 1);
    }
  }

  deleteAddedCourse(course) {
    var index = this.addedCourses.indexOf(course, 0);
    if (index > -1) {
      this.addedCourses.splice(index, 1);
    }
    this.index = this.index-1;
  }

  readCourses() {
    if (this.selectedEducation.courses == null) {
      this.selectedEducation.courses = this.addedCourses;
    } else {
      this.selectedEducation.courses = this.selectedEducation.courses.concat(this.addedCourses);
    }
    for (var i = 0; i < this.selectedEducation.courses.length; i++) {
      if (this.selectedEducation.courses[i].courseName == "") {
        var index = this.selectedEducation.courses.indexOf(this.selectedEducation.courses[i], 0);
        if (index > -1) {
          this.selectedEducation.courses.splice(index, 1);
        }
      }
    }
  }

  addSkill() {
    var skill ={
      skillName: ''
    };
    this.skillIndex = this.skillIndex + 1;
    this.addedSkills[this.skillIndex] = skill;
  }

  deleteSkill(skill) {
    var index = this.selectedExperience.skills.indexOf(skill, 0);
    if (index > -1) {
      this.selectedExperience.skills.splice(index, 1);
    }
  }

  deleteAddedSkill(skill) {
    var index = this.addedSkills.indexOf(skill, 0);
    if (index > -1) {
      this.addedSkills.splice(index, 1);
    }
    this.skillIndex = this.skillIndex-1;
  }

  readSkills() {
    if (this.selectedExperience.skills == null) {
      this.selectedExperience.skills = this.addedSkills;
    } else {
      this.selectedExperience.skills=this.selectedExperience.skills.concat(this.addedSkills);
    }
    for (var i = 0; i < this.selectedExperience.skills.length; i++) {
      if (this.selectedExperience.skills[i].skillName == "") {
        var index = this.selectedExperience.skills.indexOf(this.selectedExperience.skills[i], 0);
        if (index > -1) {
          this.selectedExperience.skills.splice(index, 1);
        }
        i--;
      }

    }
  }

  addProjectSkill() {
    var skill ={
      skillName: ''
    };
    this.skillIndex = this.skillIndex + 1;
    this.addedSkills[this.skillIndex] = skill;
  }

  deleteProjectSkill(skill) {
    var index = this.selectedProject.skills.indexOf(skill, 0);
    if (index > -1) {
      this.selectedProject.skills.splice(index, 1);
    }
  }

  deleteAddedProjectSkill(skill) {
    var index = this.addedSkills.indexOf(skill, 0);
    if (index > -1) {
      this.addedSkills.splice(index, 1);
    }
    this.skillIndex = this.skillIndex-1;
  }

  readProjectSkills() {
    if (this.selectedProject.skills == null) {
      this.selectedProject.skills = this.addedSkills;
    } else {
      this.selectedProject.skills = this.selectedProject.skills.concat(this.addedSkills);
    }
    for (var i = 0; i < this.selectedProject.skills.length; i++) {
      if (this.selectedProject.skills[i].skillName == "") {
        var index = this.selectedProject.skills.indexOf(this.selectedProject.skills[i], 0);
        if (index > -1) {
          this.selectedProject.skills.splice(index, 1);
        }
        i--;
      }
    }
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
