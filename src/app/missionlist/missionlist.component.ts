import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'] // Change this line
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.missions = data;
    });
  }
}
