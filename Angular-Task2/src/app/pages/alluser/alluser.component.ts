import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {
  users:any
  constructor(private global : ServicesService){
    this.global.alluser().subscribe(res=>{
     this.users = res.data
    })
  }
}
