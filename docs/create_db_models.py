# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.orm import relationship
from datetime import datetime

# Base declarative class
Base = declarative_base()

# Define the tables and their relationships

class Customer(Base):
    """description: Table to store customer information."""
    __tablename__ = 'customer'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)
    balance = Column(Float, default=0.0)  # Initialized as 0.0
    credit_limit = Column(Float, nullable=True)

class Product(Base):
    """description: Table to store product information."""
    __tablename__ = 'product'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    unit_price = Column(Float, nullable=False)

class Order(Base):
    """description: Table to store order information."""
    __tablename__ = 'order'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    date_ordered = Column(DateTime, default=datetime.utcnow)
    amount_total = Column(Float, default=0.0)  # Placeholder for derived value

    customer = relationship("Customer", back_populates="orders")

Customer.orders = relationship("Order", order_by=Order.id, back_populates="customer")

class OrderItem(Base):
    """description: Junction table for orders and products, storing details of each order line."""
    __tablename__ = 'order_item'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('order.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    amount = Column(Float, default=0.0)  # Placeholder for derived value
    unit_price = Column(Float, default=0.0)  # Placeholder for copy from product

    product = relationship("Product")

class Address(Base):
    """description: Table to store customer address details."""
    __tablename__ = 'address'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    line1 = Column(String, nullable=False)
    line2 = Column(String, nullable=True)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)

    customer = relationship("Customer", back_populates="addresses")

Customer.addresses = relationship("Address", order_by=Address.id, back_populates="customer")

class Contact(Base):
    """description: Table to store customer contact details."""
    __tablename__ = 'contact'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    phone_number = Column(String, nullable=False)
    contact_type = Column(String, nullable=True)  # e.g. 'home', 'work'

    customer = relationship("Customer", back_populates="contacts")

Customer.contacts = relationship("Contact", order_by=Contact.id, back_populates="customer")

class SalesRepresentative(Base):
    """description: Table storing information about sales representatives."""
    __tablename__ = 'sales_representative'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)

class CustomerSalesRepAssociation(Base):
    """description: Association table linking customers to sales representatives."""
    __tablename__ = 'customer_sales_rep_association'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    sales_rep_id = Column(Integer, ForeignKey('sales_representative.id'), nullable=False)
    date_assigned = Column(DateTime, default=datetime.utcnow)

class Category(Base):
    """description: Table to store product categories."""
    __tablename__ = 'category'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class ProductCategoryAssociation(Base):
    """description: Association table linking products to categories."""
    __tablename__ = 'product_category_association'

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    category_id = Column(Integer, ForeignKey('category.id'), nullable=False)

class Inventory(Base):
    """description: Table to store inventory information."""
    __tablename__ = 'inventory'

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    quantity_in_stock = Column(Integer, nullable=False)

class Supplier(Base):
    """description: Table to store supplier information."""
    __tablename__ = 'supplier'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_email = Column(String, nullable=True)

class ProductSupplierAssociation(Base):
    """description: Association table linking products to suppliers."""
    __tablename__ = 'product_supplier_association'

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    supplier_id = Column(Integer, ForeignKey('supplier.id'), nullable=False)

# Initialize the database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data Insertion
customers = [
    Customer(name='Alice Johnson', email='alice.johnson@example.com', balance=200, credit_limit=500),
    Customer(name='Bob Smith', balance=150, credit_limit=300),
]

products = [
    Product(name='Laptop', unit_price=1000),
    Product(name='Smartphone', unit_price=500),
]

orders = [
    Order(customer_id=1, amount_total=1500),
    Order(customer_id=2),
]

order_items = [
    OrderItem(order_id=1, product_id=1, quantity=1, unit_price=1000, amount=1000),
    OrderItem(order_id=1, product_id=2, quantity=1, unit_price=500, amount=500),
]

addresses = [
    Address(customer_id=1, line1='123 Main St', line2='Apt 101', city='Metropolis', state='NY', zip_code='10101'),
    Address(customer_id=2, line1='456 High St', city='Gotham', state='NJ', zip_code='10202'),
]

contacts = [
    Contact(customer_id=1, phone_number='555-1234', contact_type='home'),
    Contact(customer_id=2, phone_number='555-5678', contact_type='work'),
]

sales_reps = [
    SalesRepresentative(name='Susan Lee', email='slee@example.com'),
    SalesRepresentative(name='John Davis'),
]

customer_sales_association = [
    CustomerSalesRepAssociation(customer_id=1, sales_rep_id=1),
    CustomerSalesRepAssociation(customer_id=2, sales_rep_id=2),
]

categories = [
    Category(name='Electronics'),
    Category(name='Accessories'),
]

product_category_association = [
    ProductCategoryAssociation(product_id=1, category_id=1),
    ProductCategoryAssociation(product_id=2, category_id=1),
]

inventories = [
    Inventory(product_id=1, quantity_in_stock=50),
    Inventory(product_id=2, quantity_in_stock=200),
]

suppliers = [
    Supplier(name='Tech Distributors', contact_email='sales@techdistrib.com'),
    Supplier(name='Gadget Co.'),
]

product_supplier_association = [
    ProductSupplierAssociation(product_id=1, supplier_id=1),
    ProductSupplierAssociation(product_id=2, supplier_id=2),
]

# Adding all records to session
session.add_all(customers + products + orders + order_items + addresses +
                contacts + sales_reps + customer_sales_association + categories +
                product_category_association + inventories + suppliers + product_supplier_association)

# Commit the session
session.commit()

# Close the session
session.close()
