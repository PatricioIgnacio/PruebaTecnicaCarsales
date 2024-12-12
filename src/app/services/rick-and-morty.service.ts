import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
}

export interface ApiResponse {
  results: Episode[];
}

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'http://localhost:5280/api/RickAndMorty/GetAllEpisodes';

  constructor(private http: HttpClient) {}

  getAllEpisodes(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
