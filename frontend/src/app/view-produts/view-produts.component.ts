import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-produts',
  templateUrl: './view-produts.component.html',
  styleUrls: ['./view-produts.component.css']
})
export class ViewProdutsComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  IdProduct: any;
  product:any;

  ngOnInit(): void {
    this.IdProduct = this.router.snapshot.paramMap.get('id');
    this.getProdut(this.IdProduct)
  }

  getProdut(id:any){
    this.service.getIdProdut(id)
      .subscribe((res) =>{
        this.product = res.data[0];
      })
  }
}
