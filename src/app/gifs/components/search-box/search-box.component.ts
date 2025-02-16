import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gif-search-box',
  standalone: false,
  template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..."
    (keyup.enter)="findByTag()"
    #inputSearchBox>`,
})
export class SearchBoxComponent {

  @ViewChild('inputSearchBox')
  public tagInput!: ElementRef<HTMLInputElement>;

  findByTag(){

    let tag = this.tagInput;
    let tagValue = this.tagInput.nativeElement.value;

    console.log( [{tag}, {tagValue}])
  }
}
