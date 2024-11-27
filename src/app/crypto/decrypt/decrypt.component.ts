  import { Component } from '@angular/core';
  import { CryptoService } from '../../services/crypto.service';

  @Component({
    selector: 'app-decrypt',
    templateUrl: './decrypt.component.html',
    styleUrls: ['./decrypt.component.css'],
  })
  export class DecryptComponent {
    encrypted = '';
    iv = '';
    result2 = '';

    constructor(private cryptoService: CryptoService) {}

    decrypt() {
   
    
      this.cryptoService.decrypt(this.encrypted, this.iv).subscribe({
        next: (res) => {
          this.result2 = ` ${res.decrypted}`;
        },
        error: (err) => console.error('Decryption failed', err),
      });
    }
    GoToEncrypt() {
    window.location.href = '/encrypt';
    }
    goTologout() {
      window.location.href = '/login';
    }
    
  }
