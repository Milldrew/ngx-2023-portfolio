import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'frisky-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent {
  constructor(public githubService: GithubService) {}
}
