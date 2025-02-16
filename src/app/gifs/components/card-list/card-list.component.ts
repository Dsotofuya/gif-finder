import { Component } from '@angular/core';

@Component({
  selector: 'gif-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  public gifs: string[] = ['1','2','3','4','5'];


}
