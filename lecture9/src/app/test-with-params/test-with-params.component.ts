import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-with-params',
  templateUrl: './test-with-params.component.html',
  styleUrls: ['./test-with-params.component.css']
})
export class TestWithParamsComponent implements OnInit {

  id: number;
  page: number;

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(e => {
      this.id = +e.get('id');
    });

    this.route.queryParamMap.subscribe(e => {
       if(e.has('page')){
        this.page = +e.get('page');
       }
    });

    this.route.data.subscribe(e => {
      this.data = e["key"]
    });
  }

}
