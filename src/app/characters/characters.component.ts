import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public allCharacter;


  public charimg;
  public name: string;

  constructor(public http: GotServiceService, public route: Router, private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Success', 'Character Found successfully');
  }
  ngOnInit() {


    this.allCharacter = this.http.getallCharacters().subscribe(
      data => {
        console.log(data);
        this.allCharacter = data;
        for (let d in this.allCharacter) {
          console.log(this.allCharacter[d].name)
          if (this.allCharacter[d].name == '') {
            this.allCharacter[d].name = ' not found';
          }
        }

      },
      error => {
        console.log("error occur");
      }
    )
    this.charimg = this.http.getallimagchar();
  }
  public search() {

    let blogData = {
      title: this.name
    }
    let a;
    let flag: boolean = true;
    for (let char of this.allCharacter) {
      if (char.name == this.name) {
        this.showSuccess();
        setTimeout(() => {
          this.route.navigate(['/characterid', char.url.substr(char.url.lastIndexOf('/') + 1)]);
        }, 1000)
        a = char;
        flag = false;
      }
    }
    if (flag == true) {
      this.toastr.error('Character not Found', ' Error');

    }
    return a;


  }




}
