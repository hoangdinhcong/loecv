import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'post', pathMatch: 'full' },
    { path: 'post', component: PostComponent },
    { path: 'post/:id', component: PostDetailComponent },
];

export const routing = RouterModule.forRoot(routes);
