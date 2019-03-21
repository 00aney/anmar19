import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get(`${BASE_URL}${this.model}`);
  }
}
