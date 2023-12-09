import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router : Router ){}
  title = 'marjan-front';
  ngOnInit(): void {
    initFlowbite();
    this.router.navigate(['/admin']);

  }
}
