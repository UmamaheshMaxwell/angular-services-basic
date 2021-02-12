import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[] =[];

  constructor(private alumbService: AlbumService) { }

  ngOnInit(): void {
  }

  getAlbums(){
    this.alumbService.getAlbums().subscribe(response => {
      this.albums = response as any
    })
  }

}
