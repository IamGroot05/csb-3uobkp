import { Component ,OnInit ,OnChanges} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loginComponent } from '../login/login.component';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [loginComponent] 
})
export class DashbordComponent {

      constructor(
        public auth: AuthService, 
        private router: Router, 
        private route :ActivatedRoute,
        ) { }     

      logOut() {
          this.auth.logout();
          this.router.navigate(['login']);
      }
}

