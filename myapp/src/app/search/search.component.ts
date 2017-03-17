import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {MusicService} from '../providers/music.sevice';
import {Music} from '../providers/music';
import {ShareDataService} from '../providers/share-data.service';
import {NgProgressService} from 'ng2-progressbar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword :string;
  public checkSearch:boolean = true;
  public listMusicSearing:Array<Music>;
  constructor(
    public musicService:MusicService,
    public title:Title,
    public processbar:NgProgressService,
    private router:Router,
    private activated:ActivatedRoute
  ) { }

  ngOnInit() {
    //get params from router
    this.getParamRouter();
  }
  //getParamRouter
  getParamRouter() {
    this.activated.params.subscribe((params:Params) => {
      let myParams = params['value'];
      this.keyword = this.ReformatKeyword(myParams);
      console.log(this.keyword);//checking
      this.processbar.start();//start process bar after user search
      this.getMusic();
    })



  }

  //getMusic from Music service
  getMusic() {
    this.musicService.getListMusic().subscribe(

      (musics:Music[]) => {
        let listMusic = musics;
        this.onSearch(listMusic);
        this.setTitle();
      }
    )
  }





  //ReformatKeyword
  ReformatKeyword(keyword:string):string {
    let result;
    let arrayKeyword = keyword.split('_');
    result = arrayKeyword.join(' ');
    return result;
  }

  onSearch(listMusic:Music[]) {
    this.listMusicSearing = [];
    for(let i = 0;i<listMusic.length;i++) {
      let positionName:number = -1;
      let positionArtisit:number = -1;
      let nameSong = listMusic[i].name.toLowerCase();
      let artistSong = listMusic[i].artist.toLowerCase();

      positionName = nameSong.search(this.keyword.toLowerCase());
      positionArtisit = artistSong.search(this.keyword.toLowerCase());
			if (positionName !== -1 || positionArtisit !== -1) {
				this.listMusicSearing.push(listMusic[i]);
			}

		}
		if (this.listMusicSearing.length === 0) {
			this.checkSearch = false;
		}
		else {
			this.checkSearch = true;
		}
		// done process bar
		this.processbar.done();
	}
	setTitle() {
		this.title.setTitle('Found | ' + this.keyword);
	}
	goBackMusic() {
		this.router.navigate(['']);
	}

}