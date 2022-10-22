import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  async request(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  ) {
    return await (
      await fetch(url, {
        method: method
      })
    ).json();
  }
}
