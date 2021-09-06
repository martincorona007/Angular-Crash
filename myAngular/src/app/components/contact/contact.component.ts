import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact US</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <form (ngSubmit)="processForm()">
          <div class="field">
            <input type="text" name="name" class="input" placeholder="Your name" [(ngModel)]="name">
          </div>
          <div class="field">
            <input type="email" name="email" class="input" placeholder="Your email" [(ngModel)]="email">
          </div>
          <div class="field">
            <textarea class="textarea" name="message" placeholder="Whats on your mind?" [(ngModel)]="message"></textarea>
          </div>
          <button type="submit" class="button is-danger is-large">Submit</button>
        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string = "";
  email: string = "";
  message: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  processForm(){
    const allInfo = `My name is ${this.name} My email is ${this.email} My message is ${this.message}`;
    alert(allInfo);
  }
}
