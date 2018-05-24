import { Entry } from '../common/Entry';
import { LoginPage } from "../pages/login/login";

export class User {

  username:string;
  password:string;
  data:object;

  constructor(username:string, password:string, ){
    this.username = username;
    this.password = password;
    console.log(this.username, this.password);

  }

}
