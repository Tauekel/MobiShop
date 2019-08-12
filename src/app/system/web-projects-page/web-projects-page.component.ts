import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../../shared/images.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-web-projects-page',
  templateUrl: './web-projects-page.component.html',
  styleUrls: ['./web-projects-page.component.css']
})
export class WebProjectsPageComponent implements OnInit {

  private loading: boolean = true

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.fetchImages()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

}
