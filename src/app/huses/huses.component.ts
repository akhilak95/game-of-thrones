import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-huses',
  templateUrl: './huses.component.html',
  styleUrls: ['./huses.component.css']
})
export class HusesComponent implements OnInit {

  public allHouses;
  public houseimg;
  public name: string;
  constructor(public http: GotServiceService, public _route: Router, private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Success', 'House Found successfully');
  }

  ngOnInit() {
    this.allHouses = this.http.getallHouses().subscribe(
      data => {

        this.allHouses = data;


      },
      error => {
        console.log("error occur");
      }
    )

    this.houseimg = this.http.getallimageshouse();


  }
  public search() {

    let blogData = {
      title: this.name
    }
    let a;
    let flag: boolean = true;
    for (let house of this.allHouses) {
      if (house.name == this.name) {
        this.showSuccess();
        setTimeout(() => {
          this._route.navigate(['/houseid', house.url.substr(house.url.lastIndexOf('/') + 1)]);
        }, 1000)
        a = house;
        flag = false;
      }
    }
    if (flag == true) {
      this.toastr.error('House not Found', ' Error');

    }
    return a;


  }






}
