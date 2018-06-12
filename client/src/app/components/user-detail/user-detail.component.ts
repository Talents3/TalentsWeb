import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from "@angular/router";
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { Education } from '../../models/education.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User
  editIntroCardData = {
    username: '',
    age: 0,
    description:'',
    isMale: false,
    phone: '',
    newGrads: false,
    id: 0,
    needVisaSponsor: false
  };
  educations: Education[]
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
            this.educations = _.cloneDeep(user.education);
        });
    })
  }
  deleteEducation(input: any): void{
    console.log(input);

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
      }
  }

  sendEditIntroData() {  // send modified intro card to backend server

       console.log(this.editIntroCardData);
       this.dataService.modifyUser(this.editIntroCardData)
       .then(user => {
          this.user = user;
          this.router.navigateByUrl(`users/${this.user.id}`)
       });
  }

}
