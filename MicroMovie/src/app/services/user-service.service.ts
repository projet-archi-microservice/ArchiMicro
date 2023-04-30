import { Injectable } from '@angular/core';
import { User } from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private user: User|null = null

  constructor() { }

  public getUser(){
    return this.user
  }

  public enregistrerUser(userModif: User){
    //TODO appel Api
  }

  public createUser(nom: String, email: String, password: String){
    //TODO appel API
  }

  public login(nom: String, password: String){
    //TODO appel API
    //also TODO : enregistrer le User qu'on récupère
  }

}
