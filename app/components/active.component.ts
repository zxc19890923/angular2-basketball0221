import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
    selector: "bk-actives",
    templateUrl: "../templates/active.tpl.html"
})
export class ActivesComponent implements OnInit {
    data:Array<Object>;

    constructor(public httpService:HttpService) {
        this.data = [];
    }

    ngOnInit() {
        var url = "http://localhost:3000/actives";
        var params = new URLSearchParams();
        params.set("i", "5");
        this.httpService.httpGet(url, params).subscribe(res=> {
            console.log(res);
            this.data = res;
        });
    }
}