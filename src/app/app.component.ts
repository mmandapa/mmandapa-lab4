import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuarterlyGoalsComponent } from "./dashboard/quarterly-goals/quarterly-goals.component";
import { DatetimeComponent } from "./dashboard/datetime/datetime.component";
import { GreetingComponent } from "./dashboard/greeting/greeting.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuarterlyGoalsComponent, DatetimeComponent, GreetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-project';
}
