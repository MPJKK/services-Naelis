import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {

    pysakki = '';
    allstops: any;
    stopdataA: any;
    stopdataB: any;
    stopdata: any;
    message = '';

    constructor(private digitransitService: DigitransitService) {
    }

    searchFor() {
        // Resetting value for message
        this.message = '';

        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data['stops']);
            this.allstops = response.data['stops'];

            if (this.allstops.length !== 0) {

                if (response.data['stops'][1] !== undefined) {
                    this.stopdataA = response.data['stops'][0].patterns;
                    this.stopdataB = response.data['stops'][1].patterns;
                    this.stopdata = this.stopdataA.concat(this.stopdataB);
                } else {
                    this.stopdataA = response.data['stops'][0].patterns;
                    this.stopdata = this.stopdataA;
                }
                /*            console.log(this.stopdataA);
                            console.log(this.stopdataB);*/

                this.message = 'You searched for ' + this.pysakki + '!';

            } else {
                this.message = 'There were no stops matching your search...';
            }
        });

    }


    ngOnInit() {
        /*        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
                    console.log(response.data['stops']);
                    this.allstops = response.data['stops'];
                    this.stopdataA = response.data['stops'][0].patterns;
                    this.stopdataB = response.data['stops'][1].patterns;
                    this.stopdata = this.stopdataA.concat(this.stopdataB);
                    /!*            console.log(this.stopdataA);
                                console.log(this.stopdataB);*!/

                });*/
    }

}
