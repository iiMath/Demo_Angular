import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Cities App';

  menuItems =['Login', 'Cities']
  releaseDate = new Date('2023-03-14')

}
