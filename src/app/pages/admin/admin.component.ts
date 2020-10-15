import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  pages: Array<object>;
  sections: Array<object>;

  constructor(public api: ApiService) { }

  getPages () {
    this.api.get('get_wk_pages').then(res =>{
      this.pages = res;
    })
    .catch(err =>{
      console.log(err)
    })
  }
  getSections () {
    this.api.get('get_wk_sections').then(res =>{
      this.sections = res;
    })
    .catch(err =>{
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getPages();
    this.getSections();
  }

}
