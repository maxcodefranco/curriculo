import { Component,OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Currículo';

  protected profileBasic = {};
  protected profileEndereco = {};
  protected profileContato = {};
  protected profileSkills = {};
  protected profileAcademico = {};
  protected profileCerts = {};
  protected profileXp = {};


  constructor (
    private profile : ProfileService
  ){ }

  public ngOnInit (){

    this.profile.getBasic().subscribe(profile => {
      this.profileBasic = profile;
    });

    this.profile.getEndereco().subscribe(address => {
      this.profileEndereco = address;
    })

    this.profile.getContato().subscribe(address => {
      this.profileContato = address;
    })

    this.profile.getSkills().subscribe(address => {
      this.profileSkills = address;
    })

    this.profile.getAcademico().subscribe(address => {
      this.profileAcademico = address;
    })

    this.profile.getCerts().subscribe(address => {
      this.profileCerts = address;
    })

    this.profile.getXp().subscribe(address => {
      this.profileXp = address;
    })

  }

}
