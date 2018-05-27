import { User } from '../common/User';
import { Entry } from '../common/Entry';

var UserHandler = {
    currentUser:User,
  
    setUser(user:User){
        this.currentUser = user;
    }

  
}
  