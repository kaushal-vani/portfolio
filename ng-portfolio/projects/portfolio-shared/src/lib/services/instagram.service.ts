import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private readonly accessToken =
    'IGQWRQdV9Oa2JCY25wVnhUZA281RjBZAVk1JWXN3MXo0QllQd185OFhTbzdmRkh1dElNaFo5eXR5ZATl4QmlUMmphQjV3ZAnlMSzN2ajduMExLNzAzNTQ4RnVMZA0lpcmVibUN2aVMyU2Yya2xub2VOMkFTeXFjS2hPR2cZD'; // Replace with your actual Instagram access token

  constructor(private http: HttpClient) {}

  getInstagramFeed(): Observable<any> {
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${this.accessToken}`;
    return this.http.get<any>(apiUrl);
  }
}
