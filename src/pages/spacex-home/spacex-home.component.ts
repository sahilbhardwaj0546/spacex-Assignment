import { Component, HostListener, OnInit } from '@angular/core';
import { SharedServiceService } from '../../app/shared-service/shared-service.service';
import { HttpClient } from '@angular/common/http';
import { SpacexModel } from '../../app/model/spacex-model';
@Component({
  selector: 'app-spacex-home',
  templateUrl: './spacex-home.component.html',
  styleUrls: ['./spacex-home.component.scss']
})
export class SpacexHomeComponent implements OnInit {

  constructor(public sharedService: SharedServiceService, private http: HttpClient) { }
  spacexRawData: SpacexModel[] = [];
  selectedLaunchYear = '';
  selectedSuccessfulLaunch = '';
  selectedSuccessfulLanding = '';
  screenResolution = 0;
  launchYear: Array<string> = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  successIndicator: Array<string> = ['True', 'False'];
  previousSelectedYear = '';
  emptyApi = 'Please wait while we are fetching Results';
  ngOnInit(): void {
    this.screenResolution = window.innerWidth;
    this.getSpacexRawData();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenResolution = window.innerWidth;
  }
  getSpacexRawData() {
    this.sharedService.getSpacexRawData().subscribe((dataArray: SpacexModel[]) => {
      this.spacexRawData = dataArray;
      this.emptyApi = this.spacexRawData.length ? 'Please wait while we are fetching Results' : 'No results found Please Try again with other input combination';
    }, (err) => this.emptyApi = 'Please Try again after sometime ');
  }
  getLaunchYearData(year: string) {
    if (year !== this.previousSelectedYear) {
      this.selectedLaunchYear = year;
    }
    else {
      this.selectedLaunchYear = '';
    }
    this.sharedService.launchYear = '&launch_year=' + this.selectedLaunchYear;
    this.getSpacexRawData();
    this.previousSelectedYear = year;
  }
  getSuccessFullData(indicatorParam: string, indicator: string) {

    if (indicatorParam === 'launch_success') {
      if (this.selectedSuccessfulLaunch === indicator) {
        this.selectedSuccessfulLaunch = '';
      }
      else {
        this.selectedSuccessfulLaunch = indicator;
      }
      this.sharedService.launchSuccess = '&' + indicatorParam + '=' + this.selectedSuccessfulLaunch.toLowerCase();
    }

    if (indicatorParam === 'land_success') {
      if (this.selectedSuccessfulLanding === indicator) {
        this.selectedSuccessfulLanding = '';
      }
      else {
        this.selectedSuccessfulLanding = indicator;
      }
      this.sharedService.landSuccess = '&' + indicatorParam + '=' + this.selectedSuccessfulLanding.toLowerCase();
    }
    this.getSpacexRawData();
  }
}

