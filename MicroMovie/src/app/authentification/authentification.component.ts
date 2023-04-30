import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  nouveauNom: String = ""
  nouveauMDP: String = ""

  constructor(public userService: UserServiceService){}


  public onValidation(){
    this.userService.login(this.nouveauNom, this.nouveauMDP)
  }
}
