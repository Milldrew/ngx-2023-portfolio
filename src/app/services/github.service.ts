import { Injectable } from '@angular/core';
import { filteredGithubProject } from './gh-project.type';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor() {}

  githubProjects: filteredGithubProject[];

  getAllprojects() {
    this.githubProjects = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description',
        url: 'https://github.com',
        homepage: 'https://github.com',
        isPrivate: false,
        hasPages: true,
      },
      {
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description',
        url: 'https://github.com',
        homepage: 'https://github.com',
        isPrivate: false,
        hasPages: true,
      },
      {
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description',
        url: 'https://github.com',
        homepage: 'https://github.com',
        isPrivate: false,
        hasPages: true,
      },
    ];
  }
}
