import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { Post, PostsService, } from 'ng-wp-rest-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  posts$: Observable<Post[]>;
  possst: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private router: Router,
    private analytics: GoogleAnalytics
  ) {
    this.posts$ = this.postService.list();
  }

  ngOnInit() {
    this.analytics.trackView('Home Page');
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToDetailPage(id: any, title: string) {
    this.router.navigate(['/detail', id]);
    this.analytics.trackEvent('Detail Page', 'open', title);
  }

}
