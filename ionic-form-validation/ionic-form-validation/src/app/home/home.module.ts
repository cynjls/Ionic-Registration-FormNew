import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
// import { HomePage } from './home.page';

// import { HomePageRoutingModule } from './home-routing.module';


// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     HomePageRoutingModule
//   ],
//   declarations: [HomePage]
// })
// export class HomePageModule {}
