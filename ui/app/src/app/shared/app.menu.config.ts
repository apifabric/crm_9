import { MenuRootItem } from 'ontimize-web-ngx';

import { AddressCardComponent } from './Address-card/Address-card.component';

import { CategoryCardComponent } from './Category-card/Category-card.component';

import { ContactCardComponent } from './Contact-card/Contact-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { CustomerSalesRepAssociationCardComponent } from './CustomerSalesRepAssociation-card/CustomerSalesRepAssociation-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { OrderItemCardComponent } from './OrderItem-card/OrderItem-card.component';

import { ProductCardComponent } from './Product-card/Product-card.component';

import { ProductCategoryAssociationCardComponent } from './ProductCategoryAssociation-card/ProductCategoryAssociation-card.component';

import { ProductSupplierAssociationCardComponent } from './ProductSupplierAssociation-card/ProductSupplierAssociation-card.component';

import { SalesRepresentativeCardComponent } from './SalesRepresentative-card/SalesRepresentative-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Address', name: 'ADDRESS', icon: 'view_list', route: '/main/Address' }
    
        ,{ id: 'Category', name: 'CATEGORY', icon: 'view_list', route: '/main/Category' }
    
        ,{ id: 'Contact', name: 'CONTACT', icon: 'view_list', route: '/main/Contact' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'CustomerSalesRepAssociation', name: 'CUSTOMERSALESREPASSOCIATION', icon: 'view_list', route: '/main/CustomerSalesRepAssociation' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'OrderItem', name: 'ORDERITEM', icon: 'view_list', route: '/main/OrderItem' }
    
        ,{ id: 'Product', name: 'PRODUCT', icon: 'view_list', route: '/main/Product' }
    
        ,{ id: 'ProductCategoryAssociation', name: 'PRODUCTCATEGORYASSOCIATION', icon: 'view_list', route: '/main/ProductCategoryAssociation' }
    
        ,{ id: 'ProductSupplierAssociation', name: 'PRODUCTSUPPLIERASSOCIATION', icon: 'view_list', route: '/main/ProductSupplierAssociation' }
    
        ,{ id: 'SalesRepresentative', name: 'SALESREPRESENTATIVE', icon: 'view_list', route: '/main/SalesRepresentative' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AddressCardComponent

    ,CategoryCardComponent

    ,ContactCardComponent

    ,CustomerCardComponent

    ,CustomerSalesRepAssociationCardComponent

    ,InventoryCardComponent

    ,OrderCardComponent

    ,OrderItemCardComponent

    ,ProductCardComponent

    ,ProductCategoryAssociationCardComponent

    ,ProductSupplierAssociationCardComponent

    ,SalesRepresentativeCardComponent

    ,SupplierCardComponent

];