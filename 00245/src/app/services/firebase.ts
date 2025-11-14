import { Injectable } from '@angular/core';
import { key } from './key';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class Firebase {
  
  private app;
  public auth;
  public firestore;
  public storage;
 
  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: "uc00245-rodrigofreitas.firebaseapp.com",
      projectId: "uc00245-rodrigofreitas",
      storageBucket: "uc00245-rodrigofreitas.firebasestorage.app",
      messagingSenderId: "20318121944",
      appId: "1:20318121944:web:1d2099be84ac7273318cad"
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
