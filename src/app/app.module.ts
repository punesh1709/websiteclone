import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AllCoursesComponent } from './header/Training&UX_Certification/all-courses/all-courses.component';
import { LiveTraingingComponent } from './header/Training&UX_Certification/live-trainging/live-trainging.component';
import { PrivateTrainingComponent } from './header/Training&UX_Certification/private-training/private-training.component';
import { HomeComponent } from './header/home/home.component';
import { ArticlesVideosComponent } from './header/articles-videos/articles-videos.component';
import { ConsultingComponent } from './header/consulting/consulting.component';
import { ReportsBooksComponent } from './header/reports-books/reports-books.component';
import { OverviewComponent } from './header/About/overview/overview.component';
import { PeopleComponent } from './header/About/people/people.component';
import { ClientsComponent } from './header/About/clients/clients.component';
import { NewsComponent } from './header/About/news/news.component';
import { ContactUsComponent } from './header/About/contact-us/contact-us.component';
import { UxCertificationComponent } from './header/Training&UX_Certification/ux-certification/ux-certification.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './header/login/login.component';
import { UxCardComponent } from './header/Training&UX_Certification/ux-certification/ux-card/ux-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AllCoursesComponent,
    LiveTraingingComponent,
    PrivateTrainingComponent,
    HomeComponent,
    ArticlesVideosComponent,
    ConsultingComponent,
    ReportsBooksComponent,
    OverviewComponent,
    PeopleComponent,
    ClientsComponent,
    NewsComponent,
    ContactUsComponent,
    UxCertificationComponent,
    LoginComponent,
    UxCardComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
