import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
    selector: "bk-news-info",
    templateUrl: "../templates/news-info.tpl.html"
})
export class NewsInfoComponent implements OnInit {
    data: Object;
    constructor(public activedRoute:ActivatedRoute, public httpService:HttpService) {

    }

    ngOnInit() {
        var id = this.activedRoute.snapshot.params["id"];
        var url = "http://localhost:3000/news-info";
        var params = new URLSearchParams();
        console.log(id);
        params.set("id", id);
        this.httpService.httpGet(url, params).subscribe(res=> {
            console.log(res);
            this.data = res;
        });
    }
}