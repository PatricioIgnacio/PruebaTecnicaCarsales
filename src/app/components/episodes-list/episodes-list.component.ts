import { Component, OnInit } from '@angular/core';
import { RickAndMortyService, Episode } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  episodes: Episode[] = [];
  selectedEpisode: Episode | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getAllEpisodes().subscribe({
      next: (response) => {
        this.episodes = response.results;
        console.log('Episodios cargados:', this.episodes); // Depuración
      },
      error: (err) => console.error('Error al cargar los episodios', err)
    });
  }  

  onSelectEpisode(episode: Episode): void {
    this.selectedEpisode = episode;
  }
}
