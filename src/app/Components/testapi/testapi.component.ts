import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../Services/clothes.service';

@Component({
  selector: 'app-testapi',
  imports: [CommonModule],
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css'
})
export class TestapiComponent {

  clothes: any[] = [];

  constructor(private apiService: ApiService){};

  ngOnInit(){
    this.setClothes();
  }

  setClothes(): any{
    this.apiService.getData().subscribe(data =>{
      this.clothes = data;
    })
  }
}
