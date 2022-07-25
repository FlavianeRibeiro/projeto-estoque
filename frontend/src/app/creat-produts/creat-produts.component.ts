import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'
import {ActivatedRoute, TitleStrategy} from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-creat-produts',
  templateUrl: './creat-produts.component.html',
  styleUrls: ['./creat-produts.component.css']
})
export class CreatProdutsComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  messageerr:any;
  messagesuccess: any;
  IdProduct: any;
  imageProdut: any;
  file: any;

  ngOnInit(): void {
    this.IdProduct = this.router.snapshot.paramMap.get('id');
    this.getProdut(this.IdProduct)
  }

  prodForm = new FormGroup({
    'name': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required),
    'description': new FormControl('',Validators.required),
    'inventory': new FormControl('',Validators.required),
    'status': new FormControl('',Validators.required),
    'value': new FormControl('',Validators.required)
  })

  prodSubmit(){
      this.service.creat(this.prodForm.value).subscribe((res)=>{
        this.messagesuccess = res.message;
      }) 
  }

  prodUpdate(){
      this.service.update(this.prodForm.value, this.IdProduct).subscribe((res)=>{
        console.log(res);
        
        this.messagesuccess = res.message;
      })
  }

  submit(){
    if(this.prodForm.valid){
      if(!this.IdProduct ){
        this.prodForm.value.img = this.imageProdut;
        this.prodSubmit() 
        window.setTimeout(function() { location.reload(); }, 3000);
      }else{
        this.prodUpdate();
      }
    }else{
      this.messageerr = 'Preencha todos os campos'
    } 

  }

  getProdut(id:any){
    this.service.getIdProdut(id)
      .subscribe((res) =>{
        this.prodForm.patchValue(res.data[0])
      })
  }

  onChangeImg(e: Event){
    this.file = (e.target as HTMLInputElement)?.files?.[0];
    this.convertToBase64(this.file);
  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber  :Subscriber<any>) =>{
      this.readFile(file, subscriber);
    })
    observable.subscribe((d =>{
      this.imageProdut = d;
    }))
  }

  readFile(file : File, subscriber: Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () =>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = (error) =>{
      subscriber.error(error);
      subscriber.complete();
    }
  }

}
