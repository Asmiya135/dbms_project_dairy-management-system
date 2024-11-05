INSERT INTO Warehouse (WarehouseID, WarehouseName, Location, StorageCapacity, TemperatureControlled)
VALUES
    (1, 'Central Warehouse', 'New York', 10000, TRUE),
    (2, 'Eastside Storage', 'Boston', 5000, FALSE),
    (3, 'Westside Facility', 'San Francisco', 7500, TRUE),
    (4, 'South Depot', 'Atlanta', 4000, FALSE),
    (5, 'North Storage', 'Chicago', 6000, TRUE);

INSERT INTO InventoryManagement (ProductID, WarehouseID, StockLevel, ReorderThreshold, StorageCondition, WarehouseLocation, DispatchRecord)
VALUES
    (101, 1, 500, 20, 'Cool, Dry', 'Aisle 1', 'Dispatched on 2024-10-01'),
    (102, 2, 200, 10, 'Temperature Controlled', 'Aisle 3', 'Dispatched on 2024-10-02'),
    (103, 3, 1000, 30, 'Regular', 'Aisle 5', 'Pending Dispatch'),
    (104, 4, 150, 15, 'Humidity Controlled', 'Aisle 2', 'Dispatched on 2024-10-03'),
    (105, 5, 300, 25, 'Cool, Dry', 'Aisle 4', 'Pending Dispatch');

INSERT INTO Employees (EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, Department, ShiftTiming, YearsExperience, Salary)
VALUES
(1001, 'John', 'Doe', '1234567890', 'john.doe@example.com', 'Production Supervisor', 'Manufacturing', '08:00:00', 5, 60000.00),
(1002, 'Jane', 'Smith', '0987654321', 'jane.smith@example.com', 'Logistics Coordinator', 'Logistics', '09:00:00', 3, 45000.00),
(1003, 'Emily', 'Johnson', '1122334455', 'emily.johnson@example.com', 'Warehouse Manager', 'Warehouse', '07:00:00', 7, 75000.00),
(1004, 'Michael', 'Williams', '5566778899', 'michael.williams@example.com', 'Machine Operator', 'Manufacturing', '08:00:00', 2, 40000.00),
(1005, 'Sarah', 'Brown', '6677889900', 'sarah.brown@example.com', 'Supply Chain Analyst', 'Logistics', '09:00:00', 4, 52000.00);

INSERT INTO Supplier (SupplierID, SupplierName, ContactNumber, EmailID, Address) 
VALUES 
    (1, 'Dairy Supply Co.', '1234567890', 'contact@dairysupply.com', '123 Milk Lane'),
    (2, 'Fresh Farms', '0987654321', 'support@freshfarms.com', '456 Farm Road'),
    (3, 'Pure Dairy Ltd.', '1122334455', 'info@puredairy.com', '789 Dairy Ave'),
    (4, 'Golden Milk', '5566778899', 'sales@goldendairy.com', '321 Golden Street'),
    (5, 'Green Pastures', '2233445566', 'contact@greenpastures.com', '654 Green Lane');

INSERT INTO RawMilkIntake (SupplierID, IntakeID, Quantity, FatContent, PurityLevel, DeliveryDateTime, SourceLocation)
VALUES
(1, 101, 500, 3.5, 98.0, '2024-01-15 08:30:00', 'Farm A'),
(1, 102, 600, 3.0, 95.5, '2024-01-16 09:00:00', 'Farm A'),
(2, 201, 700, 4.0, 97.0, '2024-02-10 10:15:00', 'Farm B'),
(3, 301, 450, 3.8, 96.5, '2024-03-05 11:20:00', 'Farm C'),
(2, 202, 800, 3.2, 94.0, '2024-02-15 14:00:00', 'Farm B');


INSERT INTO StockMovement (MovementID, ProductID, MovementType, MovementDateTime, QuantityMoved)
VALUES
(5001, 101, 'IN', '2024-09-10 10:00:00', 100),
(5002, 102, 'OUT', '2024-09-11 11:30:00', 50),
(5003, 103, 'IN', '2024-09-12 09:00:00', 200),
(5004, 104, 'OUT', '2024-09-13 14:00:00', 150),
(5005, 105, 'IN', '2024-09-14 08:45:00', 150);

INSERT INTO Processed_products (Product_ID, Product_Name, Category, Production_Date, Expiry_Date, Batch_Number, Packaging_Details, Quantity_Produced)
VALUES
(1, 'Paneer', 'Dairy', '2024-09-01', '2024-09-15', 'BATCH001', '500g vacuum-sealed', 120),
(2, 'Amul Butter', 'Butter', '2024-09-03', '2024-12-03', 'BATCH002', '500g wrapped in foil', 200),
(3, 'Dahi', 'Curd', '2024-09-02', '2024-09-10', 'BATCH003', '200g plastic container', 300),
(4, 'Ghee', 'Clarified Butter', '2024-08-28', '2025-08-28', 'BATCH004', '1L glass jar', 180),
(5, 'Milk', 'Dairy', '2024-11-02', '2024-11-05', 'BATCH005', '1L Tetra Pak', 500);

INSERT INTO Logistics_equipment (Vehicle_ID, Vehicle_Type, Maintenance_Records, Load_Capacity, Registration_Details)
VALUES
(1, 'Refrigerated Truck', 'Last serviced: 2024-09-15', 5000, 'REG123456'),
(2, 'Milk Tanker', 'Last serviced: 2024-08-10', 10000, 'REG654321'),
(3, 'Delivery Van', 'Last serviced: 2024-10-05', 2000, 'REG789456'),
(4, 'Flatbed Truck', 'Last serviced: 2024-09-25', 7500, 'REG321789'),
(5, 'Compact Car', 'Last serviced: 2024-10-15', 500, 'REG987654');

INSERT INTO Equipment (MachineID, EquipmentName, MaintenanceSchedule, Status, CapacitySpecification, PackagingCapacityPerHour, EquipmentType)
VALUES
(1, 'Automatic Filler', 'Monthly', 'Running', '2000 Liters', 1500, 'Packaging'),
(2, 'Labeling Machine', 'Quarterly', 'Not Running', '5000 Units', 1200, 'Packaging'),
(3, 'Pasteurizer', 'Bi-Monthly', 'Running', '1000 Liters', NULL, 'Processing'),
(4, 'Mixer', 'Weekly', 'Running', '1500 Liters', NULL, 'Processing'),
(5, 'Carton Sealer', 'Monthly', 'Running', '3000 Units', 1000, 'Packaging');

INSERT INTO Shift_details (EmployeeID, Shift_Start, Shift_End)
VALUES 
(1001, '2024-09-16 08:00:00', '2024-09-16 16:00:00'),
(1002, '2024-09-16 22:00:00', '2024-09-17 06:00:00'),
(1003, '2024-09-16 06:00:00', '2024-09-16 14:00:00'),
(1004, '2024-09-16 14:00:00', '2024-09-16 22:00:00'),
(1005, '2024-09-17 10:00:00', '2024-09-17 18:00:00');

INSERT INTO Maintenance_records (MachineID, Maintenance_Date, Technician_Name, Issue_Reported, Action_Taken)
VALUES 
(1, '2024-09-01', 'Ravi Kumar', 'Leakage in sealing area', 'Replaced sealing gaskets and tested'),
(2, '2024-08-15', 'Sita Patel', 'Labeling misalignment', 'Adjusted alignment and calibrated sensors'),
(3, '2024-09-10', 'Vikram Singh', 'Motor overheating', 'Cleaned motor and replaced cooling fan'),
(4, '2024-08-20', 'Nisha Sharma', 'Inconsistent sealing', 'Replaced sealing elements and verified operation'),
(5, '2024-09-15', 'Ajay Verma', 'Hydraulic fluid leak', 'Replaced seal and refilled fluid');

INSERT INTO VehicleMaintenance (VehicleID, MaintenanceDate, IssueReported, MaintenanceCost)
VALUES
(1, '2024-01-15', 'Oil change and filter replacement', 150.00),
(2, '2024-02-20', 'Brake pad replacement', 200.50),
(1, '2024-03-05', 'Tire rotation and alignment', 80.00),
(3, '2024-04-10', 'Engine tune-up', 300.00),
(2, '2024-05-18', 'Battery replacement', 120.75);
