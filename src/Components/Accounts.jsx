import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Account = () => {
  const [accounts, setAccounts] = useState([]);
 
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
const response = await axios.get('/api/v1/accounts/');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
 
    fetchAccounts();
  }, []);
 
  return (
    <div>
      <h2>Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Type</th>
            <th>Balance</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.accountId}>
              <td>{account.accountId}</td>
              <td>{account.accountType}</td>
              <td>{account.balance}</td>
              <td>{account.customerId}</td> {/* Assuming 'customerId' is a property of account */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Account;