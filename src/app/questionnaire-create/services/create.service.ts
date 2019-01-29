import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CreateQuestionnaireService {

  constructor(private http: HttpClient) { }

  getQuestionnaireList() {
    return this.http.post('/showAllQuestionnaire', {});
  }
  saveQuestionnaireList(data) {
     return this.http.post('/configureQuestionnaire', data);
    //  return this.http.post('http://192.168.1.4:9000/test', data);

  }
}
