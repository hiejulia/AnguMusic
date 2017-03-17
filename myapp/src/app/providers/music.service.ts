import 'rxjs';
import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Music} from './music';
import {Observable} from 'rxjs/Observable';
const UrlApi = 'https://api.soundcloud.com/playlists/209262931?client_id=2f98992c40b8edf17423d93bda2e04ab';

@Injectable()
export class MusicService {
    constructor(private http:Http){}
    //get Music from api
    public getListMusic():Observable<Music[]> {

        return this.http.get(UrlApi)
            .map(value => {
                return value.json().data;
            })
            //error
            .catch(this.handleError)
    }

    //get a song from api by id

    public getSong(id:string):Observable<any> {
        let url=``;
        return this.http.get(url)
            .map(response => response.json())
            //error
            .catch(this.handleError);
    }


    //get lyric
    public getLyric(urlLyric:string):Observable<string> {
        return this.http.get(urlLyric)
            .map(response => response.text())
            //error
            .catch(this.handleError);
    }

    //handleError

    public handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Error with server call');
    }

}
