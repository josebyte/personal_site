import { NgModule } from '@angular/core';

// ICONS:
import { FeatherModule } from 'angular-feather';
import { AtSign, Mail, MapPin, Phone, User, Printer, BookOpen, Briefcase, Clipboard, Download, ThumbsUp, Camera, Heart, Github } from 'angular-feather/icons';

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
  Github
};


@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class SharedModule { }
