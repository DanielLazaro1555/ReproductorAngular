// src/app/music-player.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {
  currentSongIndex = 0;
  currentVolume = 1.0;
  timeUpdateListenerAdded = false;
  data = [];

  async init() {
    try {
      await this.getAllMusic();
      // ... Otras inicializaciones ...
    } catch (error) {
      console.error('Error al inicializar el reproductor de música:', error);
    }
  }

  // ... Otras funciones de MusicPlayer aquí ...

  private async getAllMusic() {
    // ... Código de getAllMusic ...
  }
}
