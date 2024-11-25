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
  result = '';

  constructor(private cryptoService: CryptoService) {}

  decrypt() {
    this.cryptoService.decrypt(this.encrypted, this.iv).subscribe({
      next: (res) => {
        this.result = `Decrypted: ${res.decrypted}`;
      },
      error: (err) => console.error('Decryption failed', err),
    });
  }
}
