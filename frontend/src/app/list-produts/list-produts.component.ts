import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-list-produts',
  templateUrl: './list-produts.component.html',
  styleUrls: ['./list-produts.component.css']
})
export class ListProdutsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  produts: any;
  ngOnInit(): void {
    this.getProduts()
  }


  getProduts(){
    this.service.getAllProdutsActive()
      .subscribe((res) =>{
        console.log(res.data);
        
        this.produts = res.data;
      })
  }

}
