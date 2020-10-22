import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService, private router: Router) { 
    this.posts$ = this.postService.list();
  }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToDetailPage(id: any) {
    this.router.navigate(['/detail', id]);
  }

}
