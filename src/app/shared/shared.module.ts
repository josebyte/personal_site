import { NgModule } from '@angular/core';

// ICONS:
import { FeatherModule } from 'angular-feather';
import { AtSign, Mail, MapPin, Phone, User, Printer, BookOpen, Briefcase, Clipboard, Download, ThumbsUp, Camera, Heart, Linkedin, Github } from 'angular-feather/icons';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const icons = {
  AtSign,
  Mail,
  MapPin,
  Phone,
  User,
  Printer,
  BookOpen,
  Briefcase,
  Clipboard,
  ThumbsUp,
  Download,
  Camera,
  Heart,
  Linkedin,
  Github
};


@NgModule({
  declarations: [TecnologiesComponent],
  imports: [
    FeatherModule.pick(icons),
    TranslateModule,
    CommonModule
  ],
  exports: [
    FeatherModule,
    TecnologiesComponent,
    TranslateModule
  ]
})
export class SharedModule { }
