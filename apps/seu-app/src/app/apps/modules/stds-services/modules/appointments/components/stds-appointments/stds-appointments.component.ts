import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../../services/appointments.service';

@Component({
  selector: 'app-stds-appointments',
  templateUrl: './stds-appointments.component.html',
  styleUrls: ['./stds-appointments.component.css']
})
export class StdsAppointmentsComponent implements OnInit {
  isLoading = false;
  constructor(private route: ActivatedRoute, private router: Router, private appoint: AppointmentService) { }
  appointments = [];
  can_add = false;
  ngOnInit() {
    this.appointsList();
  }

  appointsList() {
    this.isLoading = true;
    this.appoint.get_list().subscribe(response => {
      this.appointments = response['data']['appointments'];
      this.can_add = response['data']['can_add'];
      this.isLoading = false;
    }, error => {
      this.appoint.tryagain();
      this.isLoading = false;
    })
  }

  addNew() {
    this.router.navigate(['../new'], { relativeTo: this.route });
  }
  downloading = false;
  current_download;
  print(id) {
    if (this.downloading) {
      return false;
    }
    this.downloading = true;
    this.current_download = id;

    this.appoint.print(id).subscribe((response) => {
      if (!response['status']) {
        this.appoint.notifyError(response['res_code']);
      } else {
        this.appoint.downloadPDF(response, 'appointment');
      }
      this.downloading = false;
      this.current_download = null;
    }, error => {
      this.appoint.tryagain();
      this.downloading = false;
      this.current_download = null;
    })
  }
  submit = false;
  cancel(id) {
    if (this.submit) {
      return false;
    }
    this.submit = true;
    this.appoint.cancel(id).subscribe(response => {
      if (response['status']) {
        this.appoint.notifySucc(response['res_code']);
        this.appointsList();
      } else {
        this.appoint.notifyError(response['res_code']);
      }
      this.submit = false;
    }, err => {
      this.appoint.tryagain();
      this.submit = false;

    });
    return false;
  }

}
