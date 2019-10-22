import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication20191022SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication20191022CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication20191022AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication20191022HomeModule } from './home/home.module';
import { JhipsterSampleApplication20191022EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication20191022SharedModule,
    JhipsterSampleApplication20191022CoreModule,
    JhipsterSampleApplication20191022HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication20191022EntityModule,
    JhipsterSampleApplication20191022AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipsterSampleApplication20191022AppModule {}
