import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor() {}

  githubPorjects: GithubProject[];

  getAllprojects() {
    return [
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
