import { Component } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: number | null = null;
  successfulLaunch: boolean | null = null;
  successfulLand: boolean | null = null;
  availableYears: number[] = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  ];

  filterByYear(year: number): void {
    this.launchYear = year;
  }

  filterByLaunch(success: boolean): void {
    this.successfulLaunch = success;
  }

  filterByLand(success: boolean): void {
    this.successfulLand = success;
  }
}
