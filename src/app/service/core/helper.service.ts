import { Injectable } from '@angular/core';
// import { NgProgress } from '@ngx-progressbar/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    // private progressSvc: NgProgress,
    private toasterSvc: ToastrService
  ) { }



  public loaderStart() {
    //this.progressSvc.start();
  }
  public loaderStop() {
    //this.progressSvc.done();
  }
  public notifySuccess(msg: string = null) {
    this.toasterSvc.success(msg);
  }
  public notifyError(msg: string = null) {
    this.toasterSvc.error(msg);
  }
  public lsSetItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  public lsGetItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  public lsRemoveItem(key) {
    return localStorage.removeItem(key);
  }
  public lsClear() {
    return localStorage.clear();
  }

  public ssSetItem(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }

  public ssGetItem(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
  public ssRemoveItem(key) {
    return sessionStorage.removeItem(key);
  }
  public ssClear() {
    return sessionStorage.clear();
  }

  public errorHandler(error) {
    switch (error.status) {
      case 400:
        this.notifyError(error.statusText);
        break;
      case 401:
        this.notifyError(error.statusText);
        break;
      case 402:
        this.notifyError(error.statusText);
        break;
      case 403:
        this.notifyError(error.statusText);
        break;
      case 404:
        this.notifyError(error.statusText);
        break;
      default:
        break;
    }
  }

  month;
  day;
  year;
  hours;
  minutes;
  seconds;
  public convertDatePickerTimeToMySQLTime(str) {
    const rawDate = new Date(str).toISOString().split('T')
    const date = `${rawDate[0]}`
    const rawTime = rawDate[1].split(':')
    const time = `${(rawTime[0])}:${rawTime[1]}`
    return `${date}  ${time}`
  }

  diff(start, end) {
    var hours = 0;
    var mins = 0;
    if (start && end) {
      start = start.split(":");
      end = end.split(":");
      var startHM = parseInt(start[0]) * 60 + parseInt(start[1]);
      var endHM = parseInt(end[0]) * 60 + parseInt(end[1]);
      if (startHM > endHM) {
        endHM = endHM + 24 * 60;
      }
      var minDiff = endHM - startHM;
      var hours = Math.floor(minDiff / 60);
      var mins = Math.floor(minDiff % 60);
      return hours + ":" + mins;
    } else {
      return hours + ":" + mins;
    }

  }
  convertTime24to12(time24) {
    var tmpArr = time24.split(':'), time12;
    if (+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' PM';
    } else {
      if (+tmpArr[0] == 0) {
        time12 = '12:' + tmpArr[1] + ' AM';
      } else {
        if (+tmpArr[0] > 12) {
          time12 = (+tmpArr[0] - 12) + ':' + tmpArr[1] + ' PM';
        } else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
        }
      }
    }
    return time12;
  }


  public getMonth() {
    return [
      {
        key: 0,
        value: 'January'
      },
      {
        key: 1,
        value: 'February'
      },
      {
        key: 2,
        value: 'March'
      },
      {
        key: 3,
        value: 'April'
      },
      {
        key: 4,
        value: 'May'
      },
      {
        key: 5,
        value: 'June'
      },
      {
        key: 6,
        value: 'July'
      },
      {
        key: 7,
        value: 'August'
      },
      {
        key: 8,
        value: 'September'
      },
      {
        key: 9,
        value: 'October'
      },
      {
        key: 10,
        value: 'November'
      },
      {
        key: 11,
        value: 'December'
      }
    ]
  }

  public getYear() {
    var y = 2000;
    var yearArray = [];
    for (y = 2000; y <= 2500; y++) {
      yearArray.push({ y: y });
    }
    return yearArray;
  }

}
