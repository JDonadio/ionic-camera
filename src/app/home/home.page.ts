import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private camera: Camera,
  ) {}

  private takeImageAndNavigate(sourceType) {
    const options: CameraOptions = {
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      const img = 'data:image/jpeg;base64,' + imageData;
      console.log('img:', img)
    }, (err) => {
      console.log('# Error al capturar la imagen', err);
    });
  }

  selectSourceType(type: string) {
    const sourceType = type == 'browse' ?
      this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA;
    this.takeImageAndNavigate(sourceType);
  }
}
