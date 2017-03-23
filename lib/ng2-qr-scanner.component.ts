import { Component } from '@angular/core';
import WebCameraProvider from './webcamera.provider';

@Component({
  selector: 'ng2-qr-scanner',
  templateUrl: 'ng2-qr-scanner.component.html'
})

class QRScannerComponent extends WebCameraProvider {

  static READ_ITERATION_DELAY: number = 500;

  text: string = '';
  timerId: number = null;

  constructor() {
    super(
      () => {
        this.initQRCodeReader();
        this.capture();
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.tryToReadQRCode();
      });
  }

  displayCode(code: string): void {
    let camArea: any = this.getVideo();
    if (!camArea) {
      camArea = this.getFlashObject();
    }
    camArea.setAttribute('style', 'border: 12px solid #9c37b3');
    this.text = code;
    this.stopReading();
  }

  initQRCodeReader(): void {
    const w: any = <any>window;
    const qrReader = w.qrcode;

    try {
      qrReader.canvasId = 'qr-code';
      qrReader.callback = (data: string) => {
        this.displayCode(data);
      };
    } catch (e) {
      console.error(e);
    }
  }

  tryToReadQRCode(): void {
    const w: any = <any>window;
    const qrReader = w.qrcode;

    try {
      qrReader.decode();
    } catch (e) {
      this.timerId = setTimeout(this.capture.bind(this), QRScannerComponent.READ_ITERATION_DELAY);
    }
  }

  stopReading(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}

export default QRScannerComponent;

