import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { Observable, Observer, observable } from "rxjs";

import { HelperService } from "../core/helper.service";
import { ConstantService } from "../core/constant.service";


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private helperSvc: HelperService,
    private constantSvc: ConstantService
  ) { }

  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        //compute and show the % done; 
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  uploadService(url, data): Promise<any> {
    var promise = new Promise((resolve, reject) => {
      this.helperSvc.loaderStart();
      const fileObj = new FormData();

      for (var i = 0; i < data.length; i++) {
        fileObj.append("file", data[i]);
      } const uploadUrl = url;

      this.postService(uploadUrl, fileObj).subscribe((res) => {
        resolve(res);
      })

    });
    return promise;
  }

  postService(url, data): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.helperSvc.loaderStart();
      this.http.post(this.constantSvc.APIBaseURL + url, data)
        .subscribe(
          res => {
            observer.next(res);
            observer.complete();
            this.helperSvc.loaderStop();
          },
          err => {
            this.helperSvc.errorHandler(err);
            observer.complete();
            this.helperSvc.loaderStop();
          }
        );
    });
  }

  getService(url, params): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.helperSvc.loaderStart();
      this.http.get(this.constantSvc.APIBaseURL + url + params).subscribe((res) => {
        observer.next(res);
        observer.complete();
        this.helperSvc.loaderStop();
      },
        (err) => {
          this.helperSvc.errorHandler(err);
          observer.complete();
          this.helperSvc.loaderStop();
        }
      );
    });
  }

  putService(url, data): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.helperSvc.loaderStart();
      this.http.put(this.constantSvc.APIBaseURL + url, data)
        .subscribe(
          res => {
            observer.next(res);
            observer.complete();
            this.helperSvc.loaderStop();
          },
          err => {
            this.helperSvc.errorHandler(err);
            observer.complete();
            this.helperSvc.loaderStop();
          }
        );
    });
  }


  deleteService(url, params): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.helperSvc.loaderStart();
      this.http.delete(this.constantSvc.APIBaseURL + url + params).subscribe((res) => {
        observer.next(res);
        observer.complete();
        this.helperSvc.loaderStop();
      },
        (err) => {
          this.helperSvc.errorHandler(err);
          observer.complete();
          this.helperSvc.loaderStop();
        }
      );
    });
  }

  isExists(url, data): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      // this.helperSvc.loaderStart();
      this.http.post(this.constantSvc.APIBaseURL + url, data)
        .subscribe(
          res => {
            observer.next(res);
            observer.complete();
            // this.helperSvc.loaderStop();
          },
          err => {
            this.helperSvc.errorHandler(err);
            observer.complete();
            // this.helperSvc.loaderStop();
          }
        );
    });
  }

}
