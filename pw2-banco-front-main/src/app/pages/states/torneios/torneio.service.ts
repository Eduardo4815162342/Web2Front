import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseDataList } from 'src/app/models/shared';
import { Torneio } from 'src/app/models/torneio.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TorneioService {
  private baseApi: string = '/torneio';
constructor(private readonly http: HttpClient) { }


  list(): Observable<Torneio[]>{
    const params = new HttpParams().set('limit', '9999');

    return this.http
    .get<ResponseDataList<Torneio>>(environment.baseUrl + this.baseApi,
      { params }

    ).pipe(map((resp) => resp.items));
  }
}
