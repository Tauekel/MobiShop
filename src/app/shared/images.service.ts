import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Image {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

@Injectable({providedIn: 'root'})
export class ImagesService {
  public images: Image[] = []

  constructor(private http: HttpClient) {}

  fetchImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://picsum.photos/v2/list?page=2&limit=100')
      .pipe(tap(images => this.images = images))
  }
}
