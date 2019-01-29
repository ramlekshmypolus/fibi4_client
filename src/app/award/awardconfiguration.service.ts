import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { CommonService } from '../common/services/common.service';

@Injectable()
export class AwardconfigurationService {
    awardData = new BehaviorSubject<any>( {} );
    currentAwardData = this.awardData.asObservable();
    constructor( private http: HttpClient, private _commonService: CommonService ) { }

    changeAwardData( awardData: any ) {
        this.awardData.next( awardData );
    }
    
    createProjectVariationRequest(serviceRequest): Observable<JSON> {
        
        var params = {
                serviceRequest: serviceRequest,
                isUnitAdmin: localStorage.getItem('isAdmin'),
                personId: localStorage.getItem( 'personId' )
        };
        return this.http.post( this._commonService.baseUrl + '/createProjectVariationRequest', params)
            .catch( error => {
                console.error( error.message || error );
                return Observable.throw( error.message || error )
            } );
    }
    
    viewTemplate(categoryCode, serviceTypeCode): Observable<JSON> {
        var params = {
                categoryCode: categoryCode,
                serviceTypeCode: serviceTypeCode
        };
        return this.http.post( this._commonService.baseUrl + '/viewTemplate', params)
        .catch( error => {
            console.error( error.message || error );
            return Observable.throw( error.message || error )
        } );
    }
    
    getContractAdmin(unitNumber): Observable<JSON> {
        var params = {
                unitNumber: unitNumber
        };
        return this.http.post( this._commonService.baseUrl + '/getContractAdmin', params)
        .catch( error => {
            console.error( error.message || error );
            return Observable.throw( error.message || error )
        } );
    }
    
    submitOSTDetails(serviceRequest,moduleCode, moduleItemKey): Observable<JSON> {
        var params = {
                serviceRequest: serviceRequest,
                isUnitAdmin: localStorage.getItem('isAdmin'),
                personId: localStorage.getItem( 'personId' ),
                userName: localStorage.getItem( 'currentUser' ),
                moduleCode: moduleCode,
                moduleItemKey: moduleItemKey
        };
        return this.http.post( this._commonService.baseUrl + '/submitOSTDetails', params)
        .catch( error => {
            console.error( error.message || error );
            return Observable.throw( error.message || error )
        } );
    }
}
