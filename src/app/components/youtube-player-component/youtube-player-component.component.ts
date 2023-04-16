import { Component, ViewChild, AfterViewInit } from '@angular/core';

declare var YT: any;

@Component({
  selector: 'app-youtube-player-component',
  template: '<div #player></div>',
})
export class YoutubePlayerComponent implements AfterViewInit {
  @ViewChild('player') playerElement: any;
  player: any;

  ngAfterViewInit() {
    this.player = new YT.Player(this.playerElement.nativeElement, {
      height: '360',
      width: '640',
      videoId: '-nXj0p3kyzE',
      playerVars: {
        autoplay: 1,
        controls: 1,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    // handle player state change events
  }
}
