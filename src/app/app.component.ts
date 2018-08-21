import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Epicodus Tunes';
  showSpinner: boolean = true;
  spinnerShowing: boolean = false;
  ngOnInit() {
    this.showSpinner = false
    this.spinnerShowing = true
  }



}
