import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allbooks;
  public allitems = [];
  public bookimg;
  public allCharacter;
  public charimg;
  public allHouses;
  public houseimg;
  constructor(public http: GotServiceService, private toastr: ToastrService) {

  }
  showSuccess() {
    this.toastr.success('Success', 'Data Recieved successfully');
  }

  ngOnInit() {
    this.allbooks = this.http.getallBooks().subscribe(
      data => {

        this.allbooks = data;
        this.showSuccess();
        let nonSortedArray = this.allbooks;
        let sortedArray = nonSortedArray.sort(function (a, b) {
          a = a.name;
          b = b.name;
          if (a < b) return -1;
          else if (a > b) return 1;
          return 0;
        });
        this.allbooks = sortedArray;
        for (let d in this.allitems) {
          console.log(this.allitems[d].name)
          if (this.allitems[d].name == '') {
            this.allitems[d].name = ' not found';
          }
        }

        this.allitems = this.allitems.concat(this.allbooks)


      },
      error => {
        this.toastr.error('Something Went Wrong', ' Error');
      }
    )
    this.bookimg = this.http.getallimages();
    this.allCharacter = this.http.getallCharacters().subscribe(
      data => {
        this.allCharacter = data;

        let nonSortedArray = this.allCharacter;
        let sortedArray = nonSortedArray.sort(function (a, b) {
          a = a.name;
          b = b.name;
          if (a < b) return -1;
          else if (a > b) return 1;
          return 0;
        });
        this.allCharacter = sortedArray;
        for (let d in this.allitems) {
          console.log(this.allitems[d].name)
          if (this.allitems[d].name == '') {
            this.allitems[d].name = ' not found';
          }
        }

        this.allitems = this.allitems.concat(this.allCharacter)
      },
      error => {
        this.toastr.error('Something Went Wrong', ' Error');
      }
    )
    this.charimg = this.http.getallimagchar();
    this.allHouses = this.http.getallHouses().subscribe(
      data => {

        this.allHouses = data;
        let nonSortedArray = this.allHouses;
        let sortedArray = nonSortedArray.sort(function (a, b) {
          a = a.name;
          b = b.name;
          if (a < b) return -1;
          else if (a > b) return 1;
          return 0;
        });


        this.allHouses = sortedArray;
        this.allitems = this.allitems.concat(this.allHouses);
        for (let d in this.allitems) {
          console.log(this.allitems[d].name)
          if (this.allitems[d].name == '') {
            this.allitems[d].name = ' not found';
          }
        }

      },
      error => {
        this.toastr.error('Something Went Wrong', ' Error');
      }
    )

   


  }
}
