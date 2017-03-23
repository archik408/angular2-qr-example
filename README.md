# Angular2 QR-code Reader

![Technologies](./media/tech.png)

> Angular2 QR-code reader based on `getUserMedia Web API` and `LazarSoft QR Code scanner`

## Screenshot

![Screenshot1](./media/screen.png)
![Screenshot2](./media/screen1.png)

## Notes

This example based on [ng2-webcam](https://www.npmjs.com/package/ng2-webcam) component and [WebQR](http://webqr.com) library.
WebQR is a port of ZXing qrcode scanner, http://code.google.com/p/zxing.

## Getting Started
Just put component onto your HTML
```
<ng2-qr-scanner></ng2-qr-scanner>
```

And do not forget add declarations
```
declarations: [
  AppComponent,
  WebCamComponent,
  QRScannerComponent
]
```


## Try Example
```
npm install
npm start
```


## References
* [WebQR](http://webqr.com)
* [ng2-webcam](https://www.npmjs.com/package/ng2-webcam)
* [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
* [getUserMedia()](https://w3c.github.io/mediacapture-main/getusermedia.html)
* [WebRTC 1.0](http://w3c.github.io/webrtc-pc/)

## License
Copyright (c) 2016 archik
Licensed under the MIT license.
