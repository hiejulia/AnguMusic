import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.css'],

})

export class NotFoundComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {

    }
    //goBack
    goBackMusic() {
        this.router.navigate(['']);//go back to main page
    }
}