import { Component, OnInit } from '@angular/core';
import { User, users } from '../modeles/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User ={id:2, nom:"blu", email:"toto@toto.toto"};
  constructor() { }
  nouveauNom : string = "";
  nouveauMail : string = "";

  ngOnInit(): void {
    //this.user = {id:1, nom:"Thot", email:"toto@toto.toto"};
    this.user = users[0];
    this.nouveauNom = this.user.nom
    this.nouveauMail = this.user.email
  }

  onSubmitAjout(){
    if (this.nouveauNom!="") {
      this.user.nom = this.nouveauNom
    }
    if (this.nouveauMail!="") {
      this.user.email = this.nouveauMail
    }
    this.enregistrerUser(this.user)
  }

  enregistrerUser(user: User){
    //appel du back
    //this.userService.postUser(user)
  }
}
