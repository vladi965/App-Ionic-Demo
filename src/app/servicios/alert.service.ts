import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
 
@Injectable({
   providedIn: 'root'
})
export class AlertService {
 
    constructor(public alertController: AlertController) { }
 
    async presentAlertConfirm(header: string, mensaje: string) {

        let choice;

        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: header,
            message: mensaje,
            buttons: [
                {
                text: 'Cancelar',
                role: 'cancel',
                },
                {
                text: 'Sí',
                role: 'ok',
                }
            ]
        });

        await alert.present();
        await alert.onDidDismiss().then(data => {
            choice = data;
        })
        return choice;
    }


    async presentEditSesion(header: string, mensaje: string) {

        let choice;

        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: header,
            message: mensaje,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
                {
                    text: 'Editar',
                    role: 'ok',
                    handler: data => {
                        console.log(data.nuevoTitulo);
                    }
                }
            ],
            inputs: [
                {
                    name: 'nuevoTitulo',
                    placeholder: '',
                    type: 'text'
                }
            ],
        });

        await alert.present();
        await alert.onDidDismiss().then(data => {
            choice = data;
        })
        return choice;
    }
}
 
