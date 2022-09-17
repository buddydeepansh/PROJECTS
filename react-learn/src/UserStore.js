import {
  action,
  computed,
  observable,
  makeAutoObservable,
  autorun,
  runInAction,
  makeObservable,
} from "mobx";
class UserStore {
  userInfo = {
    id: "007",
    name: "Deepansh",
    subject: ["Math", "English", "Hindi"],
    radioo: "",
  };
  constructor() {
    makeObservable(this, {
      userInfo: observable,
      totalSubject: computed,
      updateUser: action,
      addSubject: action,
      addRadio: action,
    });
    autorun(this.logUserDetails);
    
  }
  get totalSubject() {
    return this.userInfo.subject;
  }
  logUserDetails = () => {
    console.log("Subject Length is:" + this.totalSubject);
  };
 
  updateUser(name) {
    return (this.userInfo.name = name);
  }
  addSubject(data) {
    return this.userInfo.subject.push(data);
  }
  addRadio(data) {
    return (this.userInfo.radioo = data);
  }
}
export default UserStore;
