import {Component, ViewChild} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormControl, NgForm} from "@angular/forms";
import {IUser} from "../../interface/iuser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('addUser') addUser!: NgForm;

  users:IUser[] = [];

  constructor(private user: UserService) { }
  onSubmit(form: NgForm) {
//     if (this.addUser.invalid) {
// // Le formulaire contient des erreurs de validation
//
//       // Affichez les erreurs de validation ici
//       Object.keys(this.addUser.controls).forEach(field => {
//         const control = this.addUser.controls[field];
//
//         if (control instanceof FormControl && control.invalid) {
//           // Pour chaque champ du formulaire qui est invalide, tu peux afficher les erreurs ici
//           const errors = control.errors;
//
//           // Exemple : Afficher les erreurs pour le champ actuel
//           console.log(`Champ ${field} a les erreurs suivantes :`, errors);
//         }
//       });
//     } else
    this.user.addUser(form.value);
    this.user.addUser(form.value).subscribe(data =>{
      this.users.push(data);
      console.log(data);
    });
  }
}
