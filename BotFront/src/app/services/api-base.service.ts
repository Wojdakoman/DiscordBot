import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApibaseService {
  protected readonly apiUrl: string = '';

  constructor(
    protected http: HttpClient,
    ) {
      this.apiUrl = environment.apiUrl;
  }
}
