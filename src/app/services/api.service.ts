import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public API_URL : string = "http://localhost:1337";
  private REQUEST_HEADER : object = {
    headers : { 
    // API_KEY : "4a9e6fe1-6289-4b63-b2a7-e081a957327f" 
    }, 
  };

  constructor(
    private http : HttpClient,
    // private localstorage : LocalStorageService
  ) { }

// private async loadToken() {
//   const accessToken = await this.localstorage._TOKEN();
//   this.REQUEST_HEADER['headers'].Authorization = `Bearer ${accessToken}`;
// }

  public async login(email : string, password : string) : Promise<any> {
    return await new Promise((resolve, reject) => {
      try {
        this.http.post(`${this.API_URL}/sf/login`,  
          { 
            email : email, 
            password : password, 
          }, this.REQUEST_HEADER).pipe(
            map(res => res)
          ).subscribe(res => resolve(res), err => reject(err)); 
      } catch (e) {
        reject(e);
      } 
    });
  }

  public async get(path : string, params : object = {}) : Promise<any> {
    return await new Promise(async(resolve, reject) => {
      try {
        // await this.loadToken();
        this.http.get(
          `${this.API_URL}/${path}`, 
          Object.assign(this.REQUEST_HEADER, { params : params }) || this.REQUEST_HEADER
        ).pipe(
          map(res => res)
        ).subscribe(res => resolve(res), err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  public async patch(path : string, data : object, params : object = {}) : Promise<any> {
    return await new Promise(async(resolve, reject) => {
      try {
        // await this.loadToken();
        this.http.patch(
          `${this.API_URL}/${path}`, 
          data, 
          Object.assign(this.REQUEST_HEADER, { params : params }) || this.REQUEST_HEADER
        ).pipe(
          map(res => res)
        ).subscribe(res => resolve(res), err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  public async post(path : string, data : object, params : object = {}) : Promise<any> {
    return await new Promise(async(resolve, reject) => {
      try {
        // await this.loadToken();
        this.http.post(
          `${this.API_URL}/${path}`, 
          data, 
          Object.assign(this.REQUEST_HEADER, { params : params }) || this.REQUEST_HEADER
        ).pipe(
          map(res => res)
        ).subscribe(res => resolve(res), err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  public async delete(path : string, params : object = {}) : Promise<any> {
    return await new Promise(async(resolve, reject) => {
      try {
        // await this.loadToken();
        this.http.delete(`${this.API_URL}/${path}`,
          Object.assign(this.REQUEST_HEADER, { params : params }) || this.REQUEST_HEADER
        ).pipe(
          map(res => res)
        ).subscribe(res => resolve(res), err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  public async all(array : Array<Promise<any>>) : Promise<any> {
    return await new Promise((resolve, reject) => {
      Promise.all(array)
        .then(values => resolve(values))
        .catch(err => reject(err));
    });
  }
}