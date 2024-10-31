# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 31, 2024 15:09:17
# Database: sqlite:////tmp/tmp.shbdDIHQeT/crm_9/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Category(SAFRSBaseX, Base):
    """
    description: Table to store product categories.
    """
    __tablename__ = 'category'
    _s_collection_name = 'Category'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ProductCategoryAssociationList : Mapped[List["ProductCategoryAssociation"]] = relationship(back_populates="category")



class Customer(SAFRSBaseX, Base):
    """
    description: Table to store customer information.
    """
    __tablename__ = 'customer'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)
    balance = Column(Float)
    credit_limit = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    AddressList : Mapped[List["Address"]] = relationship(back_populates="customer")
    ContactList : Mapped[List["Contact"]] = relationship(back_populates="customer")
    CustomerSalesRepAssociationList : Mapped[List["CustomerSalesRepAssociation"]] = relationship(back_populates="customer")
    OrderList : Mapped[List["Order"]] = relationship(back_populates="customer")



class Product(SAFRSBaseX, Base):
    """
    description: Table to store product information.
    """
    __tablename__ = 'product'
    _s_collection_name = 'Product'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    unit_price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="product")
    ProductCategoryAssociationList : Mapped[List["ProductCategoryAssociation"]] = relationship(back_populates="product")
    ProductSupplierAssociationList : Mapped[List["ProductSupplierAssociation"]] = relationship(back_populates="product")
    OrderItemList : Mapped[List["OrderItem"]] = relationship(back_populates="product")



class SalesRepresentative(SAFRSBaseX, Base):
    """
    description: Table storing information about sales representatives.
    """
    __tablename__ = 'sales_representative'
    _s_collection_name = 'SalesRepresentative'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CustomerSalesRepAssociationList : Mapped[List["CustomerSalesRepAssociation"]] = relationship(back_populates="sales_rep")



class Supplier(SAFRSBaseX, Base):
    """
    description: Table to store supplier information.
    """
    __tablename__ = 'supplier'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ProductSupplierAssociationList : Mapped[List["ProductSupplierAssociation"]] = relationship(back_populates="supplier")



class Address(SAFRSBaseX, Base):
    """
    description: Table to store customer address details.
    """
    __tablename__ = 'address'
    _s_collection_name = 'Address'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    line1 = Column(String, nullable=False)
    line2 = Column(String)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("AddressList"))

    # child relationships (access children)



class Contact(SAFRSBaseX, Base):
    """
    description: Table to store customer contact details.
    """
    __tablename__ = 'contact'
    _s_collection_name = 'Contact'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    phone_number = Column(String, nullable=False)
    contact_type = Column(String)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("ContactList"))

    # child relationships (access children)



class CustomerSalesRepAssociation(SAFRSBaseX, Base):
    """
    description: Association table linking customers to sales representatives.
    """
    __tablename__ = 'customer_sales_rep_association'
    _s_collection_name = 'CustomerSalesRepAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    sales_rep_id = Column(ForeignKey('sales_representative.id'), nullable=False)
    date_assigned = Column(DateTime)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("CustomerSalesRepAssociationList"))
    sales_rep : Mapped["SalesRepresentative"] = relationship(back_populates=("CustomerSalesRepAssociationList"))

    # child relationships (access children)



class Inventory(SAFRSBaseX, Base):
    """
    description: Table to store inventory information.
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    product_id = Column(ForeignKey('product.id'), nullable=False)
    quantity_in_stock = Column(Integer, nullable=False)

    # parent relationships (access parent)
    product : Mapped["Product"] = relationship(back_populates=("InventoryList"))

    # child relationships (access children)



class Order(SAFRSBaseX, Base):
    """
    description: Table to store order information.
    """
    __tablename__ = 'order'
    _s_collection_name = 'Order'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    date_ordered = Column(DateTime)
    amount_total = Column(Float)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("OrderList"))

    # child relationships (access children)
    OrderItemList : Mapped[List["OrderItem"]] = relationship(back_populates="order")



class ProductCategoryAssociation(SAFRSBaseX, Base):
    """
    description: Association table linking products to categories.
    """
    __tablename__ = 'product_category_association'
    _s_collection_name = 'ProductCategoryAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    product_id = Column(ForeignKey('product.id'), nullable=False)
    category_id = Column(ForeignKey('category.id'), nullable=False)

    # parent relationships (access parent)
    category : Mapped["Category"] = relationship(back_populates=("ProductCategoryAssociationList"))
    product : Mapped["Product"] = relationship(back_populates=("ProductCategoryAssociationList"))

    # child relationships (access children)



class ProductSupplierAssociation(SAFRSBaseX, Base):
    """
    description: Association table linking products to suppliers.
    """
    __tablename__ = 'product_supplier_association'
    _s_collection_name = 'ProductSupplierAssociation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    product_id = Column(ForeignKey('product.id'), nullable=False)
    supplier_id = Column(ForeignKey('supplier.id'), nullable=False)

    # parent relationships (access parent)
    product : Mapped["Product"] = relationship(back_populates=("ProductSupplierAssociationList"))
    supplier : Mapped["Supplier"] = relationship(back_populates=("ProductSupplierAssociationList"))

    # child relationships (access children)



class OrderItem(SAFRSBaseX, Base):
    """
    description: Junction table for orders and products, storing details of each order line.
    """
    __tablename__ = 'order_item'
    _s_collection_name = 'OrderItem'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('order.id'), nullable=False)
    product_id = Column(ForeignKey('product.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    amount = Column(Float)
    unit_price = Column(Float)

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("OrderItemList"))
    product : Mapped["Product"] = relationship(back_populates=("OrderItemList"))

    # child relationships (access children)
