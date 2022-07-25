import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-read-produts',
  templateUrl: './read-produts.component.html',
  styleUrls: ['./read-produts.component.css']
})
export class ReadProdutsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  produts:any;
  messageInfo: any;

  ngOnInit(): void {
    this.service.getAllProduts()
      .subscribe((res) =>{
        this.produts = res.data;
      })
  }

  deleteId(id:any){
    this.service.delete(id)
      .subscribe((res) =>{
        this.messageInfo = res.data
      })
      location.reload();
  }

}
