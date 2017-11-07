import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = "80286fe526315beb7b09";
  private client_secret = "c5baf813a62f69e94d765dd2739e0ec2c6d22eab";
  constructor( private _http:Http) { 
    console.log('GitHub Service Ready ')
    this.username = 'norkick13';
  }
  getUser () {
    return this._http.get('http://api.github.com/users/' + this.username+'?client_id=' + this.client_id+'&client_secret='+this.client_secret )
      .map(res => res.json())
  }
  getRepos () {
    return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id=' + this.client_id+ '&client_secret='+this.client_secret)
      .map(res => res.json())
  }
  updateUser (username:string) {
    this.username = username;

  }
}
