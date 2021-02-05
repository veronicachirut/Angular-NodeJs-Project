import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'userslist',
        component: UsersListComponent,
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'moviedetails/:id' , 
        component: MoviedetailsComponent,
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}