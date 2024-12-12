import { Component, Input } from '@angular/core';
import { Episode } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent {
  @Input() episode!: Episode;
}
