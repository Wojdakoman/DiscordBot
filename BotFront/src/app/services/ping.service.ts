import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApibaseService } from "./api-base.service";

@Injectable({
  providedIn: 'root'
})
export class PingService extends ApibaseService {
  constructor(
    protected http: HttpClient,
  ) {
    super(http);
  }

  public ping(): Observable<string> {
    return this.http.get<string>(this.apiUrl + '/ping');
  }
}
