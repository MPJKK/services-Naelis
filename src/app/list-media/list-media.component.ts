import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
    selector: 'app-list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

    greeting: string;
    allMedia: any;
    mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

    constructor(private mediaService: MediaService) {
    }


    ngOnInit() {
        this.greeting = this.mediaService.testi;
        this.mediaService.getAllMedia().subscribe(data => {
            this.allMedia = data;

            /*            const test = this.allMedia[0].filename.split('.');
                        console.log(test);
                        const newfilename = test[0] + '-tn320.png';
                        console.log(newfilename);*/

            this.allMedia.map(media => {
                const temp = media.filename.split('.');
                const newname = temp[0] + '-tn320.png';
                media.thumbnail = newname;
            });

            // const maptest = this.allMedia.map();

            // console.log(maptest);
        });

    }

}
