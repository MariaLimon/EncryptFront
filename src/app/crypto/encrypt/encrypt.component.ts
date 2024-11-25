import { Component } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css'],
})
export class EncryptComponent {
  plaintext = '';
  result = '';

  constructor(private cryptoService: CryptoService) {}

  encrypt() {
    this.cryptoService.encrypt(this.plaintext).subscribe({
      next: (res) => {
        this.result = `Encrypted: ${res.encrypted}, IV: ${res.iv}`;
      },
      error: (err) => console.error('Encryption failed', err),
    });
  }
}
