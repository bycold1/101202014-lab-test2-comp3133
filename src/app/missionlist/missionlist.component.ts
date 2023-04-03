import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  @Input() filteredYear: number | null = null;
  @Input() filteredLaunch: boolean | null = null; // Add this line
  @Input() filteredLand: boolean | null = null; // Add this line
  missions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMissions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredYear'] || changes['filteredLaunch'] || changes['filteredLand']) {
      this.fetchMissions(this.filteredYear, this.filteredLaunch, this.filteredLand);
    }
  }

  fetchMissions(year?: number | null, launchSuccess?: boolean | null, landSuccess?: boolean | null): void {
    let apiUrl = 'https://api.spacexdata.com/v3/launches?';
    if (year) {
      apiUrl += `launch_year=${year}&`;
    }
    if (launchSuccess !== null) {
      apiUrl += `launch_success=${launchSuccess}&`;
    }
    if (landSuccess !== null) {
      apiUrl += `land_success=${landSuccess}&`;
    }

    this.http.get<any[]>(apiUrl).subscribe(data => {
      this.missions = data;
    });
  }
}
