// Mock data 
let products = [
  {
    id: '1',
    sku: 'LAP-001',
    name: 'Laptop',
    description: 'Business laptop',
    quantity: 10,
    price: 999.99,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    sku: 'MOU-001', 
    name: 'Wireless Mouse',
    description: 'Ergonomic mouse',
    quantity: 25,
    price: 29.99,
    createdAt: new Date().toISOString()
  }
];

module.exports = products;