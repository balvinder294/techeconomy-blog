import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { Post, PostsService, } from 'ng-wp-rest-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
})
export class PostDetailPage implements OnInit {
  posts$: Observable<Post[]>;
  post$: Observable<Post>;
  postId: any;
  post: any;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService, private analytics: GoogleAnalytics) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.post$ = this.postService.get(this.postId);
    this.post$
      .subscribe(res => {
        this.post = res;
        this.analytics.trackView('Detail Page', this.post.link);
      }, res => console.error(res.error)
    );
  }

}
