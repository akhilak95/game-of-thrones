import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-houses-view',
  templateUrl: './houses-view.component.html',
  styleUrls: ['./houses-view.component.css'],
  providers:[Location]
})
export class HousesViewComponent implements OnInit {
  public currenthouseid;
  public currentdata;
  public data = 0;
  public houseimg;
  public currentimg;
  constructor(public _activatedroute: ActivatedRoute, _route: Router, public httpclient: GotServiceService, public location: Location) { }

  ngOnInit() {
    this.currenthouseid = this._activatedroute.snapshot.paramMap.get('houseid');
    console.log(this.currenthouseid);
    this.currentdata = this.httpclient.getHousesbyid(this.currenthouseid).subscribe(
      data => {
        console.log(data);
        this.currentdata = data;
        this.data = 1;
        for (let d in this.currentdata) {
          if (this.currentdata[d] == '') {
            this.currentdata[d] = [d] + ' not found';

          }

        }

      },
      error => {
        console.log("error occur");
      }
    )
    this.houseimg = this.httpclient.getallimageshouse();

    for (let img of this.houseimg) {
      if (this.houseimg.indexOf(img) == this.currenthouseid - 1) {
        this.currentimg = img;


      }
    }

  }
  public gobacktoprevpage(): any {
    this.location.back();

  }

}

