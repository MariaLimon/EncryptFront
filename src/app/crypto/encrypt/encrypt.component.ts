import { Component } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css'],
})
export class EncryptComponent {
  plaintext = '';
  textcifrado = '';
  Iv = '';

  constructor(private cryptoService: CryptoService) {}

  encrypt() {
    this.cryptoService.encrypt(this.plaintext).subscribe({
      next: (res) => {
        this.textcifrado = `${res.encrypted}`;
        this.Iv = `${res.iv}`;
      },
      error: (err) => console.error('Encryption failed', err),
    });
  }

  GoToDecrypt() {
    window.location.href = '/decrypt';
  }
  
  goTologout() {
    window.location.href = '/login';
  }
}
