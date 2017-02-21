import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
    selector: "bk-video",
    templateUrl: "../templates/video.tpl.html"
})
export class VideoComponent implements OnInit {
    data:Array<Object>;

    constructor(public httpService:HttpService) {
        this.data = [];
    }

    ngOnInit() {
        var url = "http://localhost:3000/videos";
        var params = new URLSearchParams();
        params.set("i", "5");
        this.httpService.httpGet(url, params).subscribe(res=> {
            console.log(res);
            this.data = res;
        });
    }
}