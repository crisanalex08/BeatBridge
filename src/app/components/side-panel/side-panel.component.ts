import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) {}

  events: string[] = [];
  appropriateClass:string = '';
  innerHeight = window.innerHeight;
  @HostListener('window:resize', ['$event'])
 
  onResize(event:any) {
    console.log(window.innerHeight);
    console.log(this.appropriateClass);
    if(window.innerHeight <= 450)
      this.appropriateClass = 'bottomRelative';
    else
      this.appropriateClass = 'bottomStick';
  }


  

  ngOnInit(): void {
  }
}
