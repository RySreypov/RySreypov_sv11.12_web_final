import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {HttpClientModule} from '@angular/common/http';
import { Footer } from "./footer/footer";
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,  Footer ,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
