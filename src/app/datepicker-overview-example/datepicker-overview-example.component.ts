import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-datepicker-overview-example',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './datepicker-overview-example.component.html',
  styleUrl: './datepicker-overview-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class DatepickerOverviewExampleComponent {

}
