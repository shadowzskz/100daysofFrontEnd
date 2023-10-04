import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personData = [];

  /**Interpolation */
  title = 'Hello world';
  description = "Welcome to our first Angular Project. Start building the project"
  /**Interpolation */

  /**  Data Binding */
  months= [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  /**  Data Binding */

  /**  Event Binding */
  setTrue() {
    console.log("value is set to true");
  }

  setFalse() {
    console.log("value is set to False");
  }
  /**  Data Binding */

  /** Pipes */
  simplePipeData = "This is going to work really";
  /** Pipes */

  /** Input set */
  firstFeature = {
    heading: "feature 1",
    body:"Some new Features on 1"
  }

  secondFeature = {
    heading: "feature 2",
    body:"Some new Features on 2"
  }

  thirdFeature = {
    heading: "feature 3",
    body:"Some new Features on 3"
  }

  fourthFeature = {
    heading: "feature 4",
    body:"Some new Features on 4"
  }
  /** Input set */

  
  /**Services */
  todayDate;  //Declare var to store services date
  constructor (private myService: MyServiceService) {}   //constructor to bind services Data
  ngOnInit() {
    this.todayDate = this.myService.showTodayDate();    //Services data pass to Variable

    /**Http */
  /**
   * name
   */
  
  this.myService.getData().subscribe((data) => {
    this.personData = Array.from(Object.keys(data), k => data[k]);
    console.log(this.personData);
  })
  /**Http */
  }
  /**Services */
  
  
}
