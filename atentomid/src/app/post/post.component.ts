import { Component, Input, OnInit } from '@angular/core';
import { Papasa } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Papasa;

  constructor() { }

  ngOnInit(): void {
  }

}
