// Customer.jsx
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Customer = () => {
  const [customers, setCustomers] = useState([]);
 
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
const response = await axios.get('http://localhost:8080/api/v1/customers/all');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchCustomers();
  }, []);
 
  return (
    <div>
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.customerName}</td>
              <td>{customer.customerAddress}</td>
              <td>{customer.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Customer;