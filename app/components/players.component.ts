import {Component, OnInit} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {HttpService} from "../services/http.service";
@Component({
    selector: "bk-players",
    templateUrl: "../templates/players.tpl.html"
})
export class PlayersComponent implements OnInit {
    data: Array<Object>;
    constructor(public httpService:HttpService) {

    }

    ngOnInit() {
        var url = "http://localhost:3000/players";
        var params = new URLSearchParams();
        params.set("i", "5");
        this.httpService.httpGet(url, params).subscribe(res=> {
            console.log(res);
            this.data = res;
        });
    }
}