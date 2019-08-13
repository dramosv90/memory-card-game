import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomIdService {
  constructor() { }

  instance(lenght = 5) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return  Array.from({ length }, _ => chars[Math.floor(Math.random() * chars.length)]).join('');
  }
}
