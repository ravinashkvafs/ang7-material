import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.uri;

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  basicUserInfo() {
    return this.http.get(`${baseUrl}/user/basicInfo`);
  }

  checkTodayStatus() {
    return this.http.get(`${baseUrl}/attendance/checkTodayStatus`);
  }

  fetchMonthAttendance() {
    return this.http.get(`${baseUrl}/attendance/fetchMonthAttendance`);
  }

  doCheckIn(obj) {
    return this.http.post(`${baseUrl}/attendance/checkIn`, obj);
  }

  doCheckOut(obj) {
    return this.http.post(`${baseUrl}/attendance/checkOut`, obj);
  }
}
