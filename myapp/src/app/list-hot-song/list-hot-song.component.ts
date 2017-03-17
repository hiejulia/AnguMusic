import { Component, OnInit,Input } from '@angular/core';
import {Music} from '../providers/music';



@Component({
  selector: 'app-list-hot-song',
  templateUrl: './list-hot-song.component.html',
  styleUrls: ['./list-hot-song.component.css']
})
export class ListHotSongComponent implements OnInit {
  @Input("toggle") toggle:boolean;
  @Input("song") song:any;
  @Input("listHotSong") listHotSong:Music[];




  constructor() { }

  ngOnInit() {
  }



  //load more songs
  loadMore(event){
    this.toggle = !this.toggle;
    if(this.toggle){
      console.log(event);
      console.dir(event);
      event.path[0].innerText = 'See more';
    }
    else {
    event.path[0].innerText = 'Narrow';
      

    }
  }

}
