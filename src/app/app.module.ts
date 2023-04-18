
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes} from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashboard/dashboard.component';
import { loginComponent } from './login/login.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.guard';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    loginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }