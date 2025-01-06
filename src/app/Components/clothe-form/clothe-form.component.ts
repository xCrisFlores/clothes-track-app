import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Services/clothes.service';

@Component({
  selector: 'app-clothe-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './clothe-form.component.html',
  styleUrl: './clothe-form.component.css'
})
export class ClotheFormComponent {
  clothe = {
    name: '',
    color: '',
    type: 0,
  };

  constructor(private apiService: ApiService) {}

  createClothe(): void {
    console.log(this.clothe)
    this.apiService.createClothe(this.clothe).subscribe({
      next: (response) => {
        console.log('Prenda creada con éxito:', response);
      },
      error: (error) => {
        console.error('Error al crear la prenda:', error);
      },
    });
  }

  resetForm(): void {
    this.clothe = {
      name: '',
      color: '',
      type: 0,
    };
  }
}
