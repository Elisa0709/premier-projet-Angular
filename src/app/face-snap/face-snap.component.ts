import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  isSnapped!: boolean;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Elisa';
    this.description = 'J\'apprend Angular !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.isSnapped = false;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775234_1280.png';
  }

  onAddSnap(): void {
    if (this.isSnapped == true) {
      this.snaps--;
      this.isSnapped = false;

    }else{
      this.snaps++;
      this.isSnapped = true;
    }
  }



}
