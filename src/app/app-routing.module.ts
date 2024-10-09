import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './header/Training&UX_Certification/all-courses/all-courses.component';
import { LiveTraingingComponent } from './header/Training&UX_Certification/live-trainging/live-trainging.component';
import { PrivateTrainingComponent } from './header/Training&UX_Certification/private-training/private-training.component';
import { HomeComponent } from './header/home/home.component';
import { ArticlesVideosComponent } from './header/articles-videos/articles-videos.component';
import { ConsultingComponent } from './header/consulting/consulting.component';
import { ReportsBooksComponent } from './header/reports-books/reports-books.component';
import { ClientsComponent } from './header/About/clients/clients.component';
import { ContactUsComponent } from './header/About/contact-us/contact-us.component';
import { NewsComponent } from './header/About/news/news.component';
import { OverviewComponent } from './header/About/overview/overview.component';
import { PeopleComponent } from './header/About/people/people.component';
import { UxCertificationComponent } from './header/Training&UX_Certification/ux-certification/ux-certification.component';
import { LoginComponent } from './header/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: 'live-virtual-training', component: LiveTraingingComponent },
  { path: 'private-team-training', component: PrivateTrainingComponent },
  { path: 'ux-certification', component: UxCertificationComponent },
  { path: 'articles-videos', component: ArticlesVideosComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'reports-books', component: ReportsBooksComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
