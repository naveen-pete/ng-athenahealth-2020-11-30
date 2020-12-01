import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // External template
  templateUrl: './header.component.html',

  // Inline template
  // template: '<h3>Inline template demo</h3>' +
  //   '<p>Angular App</p>',

  // template: `
  //   <h3>Inline template demo</h3>
  //   <p>Angular App</p>
  // `,

  // External styles
  styleUrls: ['./header.component.css']

  // Inline styles
  // styles: [`
  //   h3 { 
  //     color: green 
  //   }
  // `]
})
export class HeaderComponent { }