import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './triangle.component.html',
  styleUrl: './triangle.component.css'
})
export class TriangleComponent {
public x:number|null= null;
public y:number|null=null;
public z:number|null=null;
public plotas:number|null=null;

public  findArea() {
  if (this.x!=null && this.y!=null && this.z!=null) {
 const semi= this.plotas=(this.x + this.y + this.z)/2;
 Math.sqrt(semi*(semi-this.x)*(semi-this.y)*(semi-this.z))
  this.x=null;
  this.y=null;
  this.z=null;
  }
}
}
