import { Injectable} from '@angular/core';

@Injectable()
export class CommonService {debugger;

  baseUrl = '';

  elasticIndexUrl = 'http://192.168.1.76:9200/';

  // outputPath = 'http://polus.fibiweb.com/kc-dev';
  outputPath = 'http://192.168.1.139:8080/kc-dev';

  // outputPathAB = 'http://polus.fibiweb.com/AwardBudgetTool';
  outputPathAB = 'http://192.168.1.139:8080/AwardBudgetTool';

  outputPathOST = 'http://192.168.1.139:8080/osr';
  // outputPathOST = 'http://polus.fibiweb.com/osr';

  IRBOutputPath = 'http://192.168.1.139:8080/fibi-irb/dashboard#/irb/dashboard';
  // IRBOutputPath = 'http://polus.fibiweb.com/fibi-irb/dashboard#/irb/dashboard';


  dashboardRequestObject = {
    property1: '',
    property2: '',
    property3: '',
    property4: '',
    pageNumber: 20,
    sortBy: 'updateTimeStamp',
    reverse: 'DESC',
    tabIndex: null,
    userName: localStorage.getItem( 'currentUser' ),
    personId: localStorage.getItem( 'personId' ),
    currentPage: 1,
    isUnitAdmin: (localStorage.getItem('isAdmin') === 'true'),
    unitNumber: localStorage.getItem('unitNumber'),
    provost: (localStorage.getItem( 'provost' ) === 'true'),
    reviewer: (localStorage.getItem( 'reviewer' ) === 'true'),
    proposalTabName: null
  };

  constructor() { }
  logout() {
    localStorage.clear();
  }
  getDashboardObject() {
   return Object.assign({}, this.dashboardRequestObject);
  }

  /* scrolls page to top */
  pageScroll(elementId) {
    const id = document.getElementById(elementId);
    if (id) {
        id.scrollIntoView({behavior : 'smooth'});
    }
  }

  _keyPress(event: any, patternType) {
    const pattern = patternType === 'date' ? /[0-9\+\-\/\ ]/ : /[0-9\a-zA-Z]/;
    if (!pattern.test(String.fromCharCode(event.charCode))) {
        event.preventDefault();
    }
  }

}
