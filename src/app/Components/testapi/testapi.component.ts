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
      console.log(data);
      
    })
  }

  setUsed(id: number): void {
    console.log(id);
    
    this.apiService.setUsed(id).subscribe({
      next: () => {
        this.setClothes();
      },
      error: (error) => {
        console.error('Error al crear la prenda:', error);
      },
    });
  }

  deleteClothe(id: string): void {
    console.log(id);
    
    this.apiService.deleteClothe(id).subscribe({
      next: () => {
        this.setClothes();
      },
      error: (error) => {
        console.error('Error al eliminar la prenda:', error);
      },
    });
  }
}
