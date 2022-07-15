import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule, Http} from '@angular/http';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ArraySortPipe } from './pipes/array-sort/array-sort.pipe';
// import { FontAwesomeModule } from '@fortawesome/fontawesome-free';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
