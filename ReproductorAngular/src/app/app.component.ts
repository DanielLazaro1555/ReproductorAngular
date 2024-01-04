// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from './music-player.service';

@Component({
  selector: 'app-root',
  template: `
    <!-- Tu contenido de componente aquí -->
  `
})
export class AppComponent implements OnInit {

  constructor(private musicPlayerService: MusicPlayerService) { }

  ngOnInit() {
    this.musicPlayerService.init();
  }

}
