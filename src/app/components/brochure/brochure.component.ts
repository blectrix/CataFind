import { Component, Input, OnInit } from '@angular/core';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss'],
})
export class BrochureComponent implements OnInit {

  @Input() brochure;

  constructor(private platform: Platform, public navCtrl: NavController, private document: DocumentViewer, private file: File, private transfer: FileTransfer) { }


  ngOnInit() {}

  getDescription(data) {
    return data.join(', ');
  }

  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/pdf/Our 55th Birthday Catalogue.pdf', 'application/pdf', options);
  }

  downloadAndOpenPdf() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('https://www.guzzle.co.za/specials/catalogue/74032/#view=single&page=1', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
}
