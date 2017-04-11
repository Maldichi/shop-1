import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdListModule, MdMenuItem} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppRouterModule} from './app-router.module';
import {AppComponent} from './view/main/app.component';
import {CategoriesService} from './service/categories.service';
import {GoodsComponent} from './view/goods/goods.component';
import {GoodsControlComponent} from './view/goods/goods-control/goods-control.component';
import {GoodsDescriptionComponent} from './view/goods/goods-description/goods-description.component';
import {GoodsService} from './service/goods.service';
import {ProjectItemComponent} from './view/project/project-item/project-item.component';
import {AddProjectComponent, AddProjectDialogComponent} from './view/project/add-project/add-project.component';
import {HelpersModule} from './helpers/helpers.module';
import {
    DeleteItemComponent,
    DeleteItemDialogComponent
} from './view/project/project-item/delete-item/delete-item.component';
import {EditItemComponent, EditProjectDialogComponent} from './view/project/project-item/edit-item/edit-item.component';
import {ProjectService} from './service/project.service';
import {ProjectComponent} from './view/project/project.component';
import {ManagerComponent} from './view/manager/manager.component';
import {AdminComponent} from './view/admin/admin.component';
import {BuyerComponent} from './view/buyer/buyer.component';
import {BuyerLenaComponent} from './view/buyer-lena/buyer-lena.component';
import {SaleComponent} from './view/sale/sale.component';
import {ProjectItemDragOverDirective} from './view/project/project-item/project-item-drag-over.directive';
import {AddGoodsComponent, AddGoodsDialogComponent} from './view/add-goods/add-goods.component';
import {SearchBcComponent} from './view/search-bc/search-bc.component';
import {HeaderComponent} from './view/header/header.component';
import {HeaderService} from './service/header.service';
import {UserService} from './service/user.service';
import {MenuIconsExample} from './view/buyer-lena/buyer-lena-menumaterial.component';
import 'hammerjs';


@NgModule({
    declarations: [
        AppComponent,
        GoodsComponent,
        GoodsControlComponent,
        GoodsDescriptionComponent,
        ProjectItemComponent,
        AddProjectComponent,
        AddProjectDialogComponent,
        DeleteItemComponent,
        DeleteItemDialogComponent,
        EditItemComponent,
        EditProjectDialogComponent,
        ProjectComponent,
        ProjectItemDragOverDirective,
        AddGoodsComponent,
        AddGoodsDialogComponent,
        SearchBcComponent,
        HeaderComponent,
        ManagerComponent,
        BuyerComponent,
        AdminComponent,
        SaleComponent,
        BuyerLenaComponent,
        MenuIconsExample
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        MdListModule,
        HelpersModule,
        AppRouterModule
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        AddProjectDialogComponent,
        DeleteItemDialogComponent,
        EditProjectDialogComponent
    ],
    providers: [GoodsService, //all services must be included here
        ProjectService,
        HeaderService,
        UserService,
        CategoriesService
    ]
})
export class AppModule {
}
