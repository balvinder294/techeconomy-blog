import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostsService, } from 'ng-wp-rest-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
  // styleUrls: ['./folder.page.scss'],
})
export class PostDetailPage implements OnInit {
  // public folder: string;

  posts$: Observable<Post[]>;
  post$: Observable<Post>;
  postId: any;
  post: any;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.post$ = this.postService.get(this.postId);
    this.post$
      .subscribe(res => {
        this.post = res;
        console.log(this.post);
      }, res => console.error(res.error)
    );
  }

}
