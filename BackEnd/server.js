const express = require('express');
const cors = require('cors');
const employees = require('./data/employee.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/**
 * GET all employees
 */
app.get('/api/employees', (req, res) => {
  res.json({
    status: 'success',
    data: employees
  });
});

/**
 * GET employee by id
 */
app.get('/api/employees/:id', (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.data.find(emp => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      status: 'error',
      message: 'Employee not found'
    });
  }

  res.json({
    status: 'success',
    data: employee
  });
});
/**
 * POST create employee
 */
app.post('/api/employees', (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    ...req.body
  };

  employees.push(newEmployee);

  res.status(201).json({
    status: 'success',
    data: newEmployee
  });
});

app.listen(PORT, () => {
  console.log(`Employee API running on http://localhost:${PORT}`);
});
