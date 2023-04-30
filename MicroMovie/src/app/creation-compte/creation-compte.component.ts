import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent {
  nouveauNom: String = ""
  nouveauMDP: String = ""
  nouveauEmail: String = ""

  constructor(public userService: UserServiceService){}


  public onValidation(){
    this.userService.login(this.nouveauNom, this.nouveauMDP)
  }
}
