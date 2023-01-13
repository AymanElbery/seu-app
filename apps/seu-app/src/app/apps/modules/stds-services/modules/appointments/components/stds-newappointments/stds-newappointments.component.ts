import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../../services/appointments.service';

@Component({
  selector: 'app-stds-newappointments',
  templateUrl: './stds-newappointments.component.html',
  styleUrls: ['./stds-newappointments.component.css']
})
export class StdsNewappointmentsComponent implements OnInit {

  isLoading = false;
  is_ug = true;
  constructor(private route: ActivatedRoute, private router: Router, private appoint: AppointmentService) { 
    
  }
  appointments = [];
  can_add = false;
  student;

  selectedAppointmentID;
  times = [];
  days = [];
  weekdays = [];

  ngOnInit() {
    this.student = this.appoint.LoggedInUser;
    this.get_available_appointments();
  }
  get_available_appointments() {
    this.isLoading = true;
    this.appoint.available().subscribe(response => {
      if (!response['data']['can_add']) {
        this.redirectToList();
      }
      this.appointments = response['data']['appointments'];
      this.is_ug = response['data']['is_ug'];
      Object.keys(this.appointments).forEach((time) => {
        let record = this.appointments[time];
        this.times.push(time);
        Object.keys(record).forEach((date) => {
          let details = record[date];
          if (!this.days.find(item => item == date)) {
            this.days.push(date);
            this.weekdays.push(details['DAY_NAME']);
          }
        });
      });
      this.isLoading = false;
    }, error => {
      this.appoint.tryagain();
      this.isLoading = false;
      this.redirectToList();
    });
  }
  redirectToList() {
    this.router.navigate(['../home'], { relativeTo: this.route });
  }
  submit = false;
  register() {
    this.submit = true;
    this.appoint.add({ id: this.selectedAppointmentID }).subscribe(response => {
      if (!response['status']) {
        this.appoint.notifyError(response['res_code']);
        this.get_available_appointments();
      } else {
        this.redirectToList();
      }
      this.submit = false;
    }, err => {
      this.appoint.tryagain();
      this.submit = false;
    });
    return false;
  }

}
