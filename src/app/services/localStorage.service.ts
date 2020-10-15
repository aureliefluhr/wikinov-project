import { Inject, Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private storage: StorageMap, 
    private router : Router
  ) { }

  public async checkLogin() {
    const connected = await this.storage.get('connected');
    return connected
  }
      
  public login(res) : void {
    this.storage.set('user', res.user);
    this.storage.set('accessToken', res.accessToken);
    this.storage.set('refreshToken', res.refreshToken);
    this.storage.set('connected', true);
    this.router.navigateByUrl('/');
  }

  public async _TOKEN() {
    return await this.storage.get('accessToken');
  }
      
  public async logout() {
    await this.storage.delete('user');
    this.storage.set('connected', false);
    this.router.navigateByUrl('auth');
  }
      
  public async set(key : string, value : any) {
    return await this.storage.set(key, value);
  }
      
  public async get(key : string) {
    return await this.storage.get(key);
  }
      

//    protected findByFilters(arr, filters) : boolean {
//      let status = true;
//      Object.keys(filters).forEach(key => {
//        if(arr[key] && filters[key]) {
//          if(arr[key].toString().toLowerCase() !== filters[key].toString().toLowerCase()) status = false;  
//        } else {
//          if(arr[key] !== filters[key]) status = false;
//        }
//      });
//      return status;
//    }

//    public async findAll(key : string, filters : object = {}) : Promise<any>  {
//      return await new Promise( async(resolve, reject) => {
//        try {
//          const data : Array<object> = await this.storage.get(key);
//          const res = data.filter(elem => {
//            return this.findByFilters(elem, filters);
//          });
//          resolve((res.length) ? res[0] : false);
//        } catch (e) {
//          reject(e);
//        }
//      });
}