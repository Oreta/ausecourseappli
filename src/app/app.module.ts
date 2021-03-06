import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatStepperModule} from '@angular/material' ;

import { routing } from './app.routing';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayAccountComponent } from './components/display-account/display-account.component';
import { ModifAccountComponent } from './components/modif-account/modif-account.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { ListeCourseComponent } from './components/liste-course/liste-course.component';
import { LivreursComponent } from './components/livreurs/livreurs.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LivreurDashboardComponent } from './components/livreur-dashboard/livreur-dashboard.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderDetailsClientComponent,DialogOverviewExampleDialog } from './components/order-details-client/order-details-client.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DisplayAccountComponent,
    ModifAccountComponent,
    NavbarComponent,
    ListeCourseComponent,
    LivreursComponent,
    PaymentComponent,
    OrdersComponent,
    LivreurDashboardComponent,
    OrderDetailsComponent,
    OrderDetailsClientComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
	BrowserAnimationsModule,
	NoopAnimationsModule,
	routing,
	HttpClientModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatStepperModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
