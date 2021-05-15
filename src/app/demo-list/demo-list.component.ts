import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

import { Demo } from 'src/app/demo.model';

@Component({
  selector: 'demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss'],
})
export class DemoListComponent implements OnInit {
  demos: Demo[];
  constructor(private demoservice: DemoService) {}

  ngOnInit() {
    this.demoservice.getDemo().subscribe((data) => {
      this.demos = data.map((e) => {
        const data = e.payload.doc.data() as Demo;
        return {
          id: e.payload.doc.id,
          ...data,
        };
      });
    });
  }

  create(demo: Demo) {
    this.demoservice.createDemo(demo);
  }

  update(demo: Demo) {
    this.demoservice.updateDemo(demo);
  }

  delete(id: string) {
    this.demoservice.deleteDemo(id);
  }
}
