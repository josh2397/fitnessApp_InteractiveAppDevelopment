import { Entry } from '../common/Entry';
import { LoginPage } from "../pages/login/login";
import { Data } from "../common/Data";

export class User {
  username:string;
  password:string;
  data:Data;

  constructor(username:string, password:string){
    this.username = username;
    this.password = password;
    this.data = new Data();
    console.log(this.username, this.password);
  }

  getNewEntry(entry:Entry){
    this.data.addEntry(entry);
  }
}
