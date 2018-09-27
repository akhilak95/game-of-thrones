import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public allbooks;
  public allCharacter;
  public allHouses;
  public bookimg;
  public charimg;
  public houseimg;
  public name: string;
  constructor(public http: GotServiceService, public _route: Router, private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Success', 'Book Found successfully');
  }
  ngOnInit() {
    this.allbooks = this.http.getallBooks().subscribe(
      data => {

        this.allbooks = data;


      },
      error => {
        this.toastr.error('Something Went Wrong', ' Error');

      }
    )

    this.bookimg = this.http.getallimages();
}

  public search() {

    let blogData = {
      title: this.name
    }
    let a;
    let flag: boolean = true;
    for (let book of this.allbooks) {
      if (book.name == this.name) {
        this.showSuccess();
        setTimeout(() => {
          this._route.navigate(['/bookid', book.url.substr(book.url.lastIndexOf('/') + 1)]);
        }, 1000)
        a = book;
        flag = false;
      }
    }
    if (flag == true) {
      this.toastr.error('book not Found', ' Error');

    }
    return a;

  }







}
