import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Address', loadChildren: () => import('./Address/Address.module').then(m => m.AddressModule) },
    
        { path: 'Category', loadChildren: () => import('./Category/Category.module').then(m => m.CategoryModule) },
    
        { path: 'Contact', loadChildren: () => import('./Contact/Contact.module').then(m => m.ContactModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'CustomerSalesRepAssociation', loadChildren: () => import('./CustomerSalesRepAssociation/CustomerSalesRepAssociation.module').then(m => m.CustomerSalesRepAssociationModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'OrderItem', loadChildren: () => import('./OrderItem/OrderItem.module').then(m => m.OrderItemModule) },
    
        { path: 'Product', loadChildren: () => import('./Product/Product.module').then(m => m.ProductModule) },
    
        { path: 'ProductCategoryAssociation', loadChildren: () => import('./ProductCategoryAssociation/ProductCategoryAssociation.module').then(m => m.ProductCategoryAssociationModule) },
    
        { path: 'ProductSupplierAssociation', loadChildren: () => import('./ProductSupplierAssociation/ProductSupplierAssociation.module').then(m => m.ProductSupplierAssociationModule) },
    
        { path: 'SalesRepresentative', loadChildren: () => import('./SalesRepresentative/SalesRepresentative.module').then(m => m.SalesRepresentativeModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }