import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import {
  profileBasic,
  profileEndereco,
  profileContato,
  profileSkills,
  profileAcademico,
  profileCerts,
  profileXp,
  projetos
} from "../data/profile";



/**
 * ProfileService
 * @constructor
 */

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  /**
   * Informações básicas do perfil
   * @return Observable<{}>
   */
  public getBasic() : Observable<{}> {
    return of(profileBasic)
  }

  /**
   * Informações de localização do perfil
   * @return Observable<{}>
   */
  public getEndereco() : Observable<{}> {
    return of(profileEndereco)
  }

  public getContato (): Observable<{}> {
    return of(profileContato);
  }

  public getSkills(): Observable<{}> {
    return of(profileSkills);
  }

  public getAcademico(): Observable<{}> {
    return of(profileAcademico);
  }

  public getCerts(): Observable<{}> {
    return of(profileCerts);
  }

  public getXp(): Observable<{}> {
    return of(profileXp);
  }

  public getProjetos(): Observable<{}> {
    return of(projetos);
  }

}
