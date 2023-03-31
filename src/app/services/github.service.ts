import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor() {}

  githubProjects: GithubProject[];

  getAllprojects() {
    this.githubProjects = [
      {
        name: 'Project 1',
        description: 'This is project 1',
        url: '',
      },
    ];
  }
}

type GithubProject = {
  name: string;
  description: string;
  url: string;
};
