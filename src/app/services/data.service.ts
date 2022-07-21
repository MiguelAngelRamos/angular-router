import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/IComment';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
   }

  // *Para traernos todos los Posts

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments():Observable<IComment[]> {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getUser(id: number):Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getUsersAll():Observable<IUser[]>{
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
