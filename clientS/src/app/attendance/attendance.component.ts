import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  isConnected = true;

  constructor(private connectionService: ConnectionService, private attS: AttendanceService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
    });
  }

  coords: any = null;

  // https://maps.google.com/maps?q=tughlakabad

  ngOnInit() {
    if (navigator.geolocation) {
      this.coords = {};

      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition((pos) => {

        this.coords['latitude'] = pos.coords['latitude'];
        this.coords['longitude'] = pos.coords['longitude'];
        this.coords['accuracy'] = pos.coords['accuracy'];

      }, (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }, options);
    }
    else
      alert('Geolocation not supported !');

    //temp solution-start
    this.changeMonth(1);
    this.changeMonth(-1);
    //temp solution-end

    this.basicUserInfo();
    this.checkTodayStatus();
    this.fetchMonthAttendance();
  }

  loading: boolean = true;
  today: Date = new Date(new Date().setDate(1));
  days_count: number = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
  days: any = new Array(this.days_count).fill(0).map((item, i) => (i + 1));
  intrvl: any;
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  found_attendance: boolean = false;
  userObj: Object = {};
  monthAttendanceObj: any;

  changeMonth(integer) {
    this.today = new Date(this.today.getFullYear(), this.today.getMonth() + integer, 1);
    this.days_count = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    this.days = new Array(this.days_count).fill(0).map((item, i) => (i + 1));
    this.days.unshift(...new Array(this.today.getDay()).fill(''));
    if (this.days.length % 7 != 0)
      this.days.push(...new Array(7 - (this.days.length % 7)).fill(''));
  }

  prevMonth() {
    this.changeMonth(-1);
  }

  nextMonth() {
    this.changeMonth(1);
  }

  basicUserInfo() {
    this.attS.basicUserInfo().subscribe(resp => {
      console.log(resp);
      this.userObj = resp['data'];
    }, errD => {
      // alert(errD['error']['message']);
      console.log(errD['error']);
    });
  }

  checkTodayStatus() {
    this.attS.checkTodayStatus().subscribe(resp => {
      console.log(resp);
      this.found_attendance = true;
    }, errD => {
      // alert(errD['error']['message']);
      console.log(errD['error']);
    });
  }

  fetchMonthAttendance() {
    this.attS.fetchMonthAttendance().subscribe(resp => {
      console.log(resp);
      this.monthAttendanceObj = resp['data'];
      this.loading = false;
    }, errD => {
      // alert(errD['error']['message']);
      console.log(errD['error']);
    });
  }

  checkEventExists(date) {
    if (date in this.monthAttendanceObj) return true;
  }

  checkEventExistsAtDate(date) {
    let att = this.monthAttendanceObj[date][0]['attendance'];

    return {
      class: att == 'P' ? 'day_event_p' : (att == 'A' ? 'day_event_a' : 'day_event_d'),
      value: att == 'P' ? 'Present' : (att == 'A' ? 'Absent' : '')
    }
  }

  markIn() {
    if (confirm('Are You Sure Want to Mark-in for today ?')) {
      this.attS.doCheckIn({
        ...this.coords,
        attendance: 'P'
      }).subscribe(resp => {
        console.log(resp);
        this.found_attendance = true;
      }, errD => {
        alert(errD['error']['message']);
        console.log(errD['error']);
      });
    }
  }

  markOut() {
    if (confirm('Are You Sure Want to Mark-out for today ?')) {
      this.attS.doCheckOut(this.coords).subscribe(resp => {
        console.log(resp);
        this.found_attendance = false;
      });
    }
  }

  data = [
    {
      id: 1,
      name: "avis",
    },
    {
      id: 2,
      name: "tasis"
    },
    {
      id: 3,
      name: "ticus"
    }
  ]

  downloadReports() {   // we can download our json data in many formats. ex: csv, excel
    // var filename = "someFileName.xlsx"
    var filename = "someFileName.xlsx"
    //alasql('SELECT id as ID,name as Name INTO XLSX("' + filename + '",{headers:true}) FROM ?', [$scope.OrganizationUsersList]);
    alasql('SELECT * INTO XLSX("' + filename + '",{headers:true}) FROM ?', [this.data]);
  }
}
