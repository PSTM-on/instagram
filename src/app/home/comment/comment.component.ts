import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  template: `<disqus [identifier]="pageId"></disqus>`,
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  pageId = '/post/123';
  url = 'http://localhost:4200/home';

  constructor() { }

  ngOnInit(): void {
  }

}
