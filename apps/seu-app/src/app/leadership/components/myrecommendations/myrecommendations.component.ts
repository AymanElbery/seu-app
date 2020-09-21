import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myrecommendations',
  templateUrl: './myrecommendations.component.html',
  styleUrls: ['./myrecommendations.component.css']
})
export class LeadershipMyRecomendationssComponent implements OnInit {

  isLoading = false;
  recList = [];

  constructor(
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadRecs();
  }

  loadRecs() {
    this.isLoading = true;
    this.leadershipService.get_my_recommendations().subscribe((response => {
      this.recList = response.data.recommendations;
      this.isLoading = false;
    }));
  }
}