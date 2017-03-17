import { Component, OnInit ,Input, AfterViewInit, ElementRef,
ViewChild,AfterViewChecked,state, style, transition,trigger, animate,
keyframes} from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [
        trigger('animationButtonDownload', [
            state('inactive', style(
                { transform: 'translate(0,-100%)', opacity: 0, display: 'none' }
            )),
            state('active', style(
                { transform: 'translate(0,0)', opacity: 1, display: 'block' }
            )),
            transition('inactive => active', animate(300, keyframes(
                [
                    style(
                        { opacity: 0, transform: 'translate(0,-100%)' }
                    ),
                    style(
                        { opacity: 1, transform: 'translate(0,15px)' }
                    ),
                    style(
                        { opacity: 1, transform: 'translate(0,0)' }
                    )
                ]
            ))),
            transition('active => inactive', animate(300, keyframes(
                [
                    style(
                        { opacity: 1, transform: 'translate(0,0)' }
                    ),
                    style(
                        { opacity: 0, transform: 'translate(0,-15px)' }
                    ),
                    style(
                        { opacity: 0, transform: 'translate(0,-100%)' }
                    )
                ]
            )))
        ])
    ]
})
export class PlayerComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input('song') Song:any;
  @ViewChild('player') player: ElementRef;
    @ViewChild('processBar') private processBar: ElementRef;
    @ViewChild('iconPlay') private iconPlay: ElementRef;
    @ViewChild('iconVolume') private iconVolume: ElementRef;
    @ViewChild('showTimeHover') private showTimeHover: ElementRef;

    private togglePlay:boolean= false;
    private toggleVolume:boolean=false;
     public currentTime;
    public showTime: string;
    private durationTime;
    private loaded: boolean = false;
    public currentTimeHover: string;
    public state: string = 'inactive';
    public color: string = "red";
  




  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.updateTiming();
  }

  ngAfterViewChecked(){
    this.getdurationTime();
  }


  updateTiming(){

  }

//get duration time audio
  getdurationTime(){
    if(isNaN(this.player.nativeElement.duration) === false) {

    }
  }
}
