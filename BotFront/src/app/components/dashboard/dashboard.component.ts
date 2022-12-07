import { Component } from '@angular/core';
import { PingService } from 'src/app/services/ping.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public pingResponse = '';

  constructor(
    private pingService: PingService,
  ) {}

  public pingServer(): void {
    this.pingService.ping().subscribe({
      next: (response: string) => this.pingResponse = response,
      error: (err) => {
        this.pingResponse = '';
        console.error(err);
      }
    });
  }
}
