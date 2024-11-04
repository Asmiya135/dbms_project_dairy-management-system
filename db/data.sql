INSERT INTO PackagingEquipment (MachineID, EquipmentName, ModelNumber, Manufacturer, ManufacturingYear, PurchaseDate, MaintenanceSchedule, PackagingCapacityPerHour)
VALUES
(1, 'AutoPacker', 'AP123', 'PackCorp', 2020, '2022-01-15', 'Monthly', 500),
(2, 'ProPacker', 'PP456', 'PackCorp', 2019, '2021-05-20', 'Bi-Weekly', 450),
(3, 'QuickPack', 'QP789', 'QuickMachines', 2021, '2022-03-10', 'Weekly', 300),
(4,'PackMaster','PM101','MegaPack',2020,'2021-12-01','Monthly',600),
(5, 'UltraPack', 'UP111', 'SuperPack', 2022, '2023-06-05', 'Quarterly', 700);

INSERT INTO InventoryManagement (ProductID, StockLevel, ReorderThreshold, StorageCondition, WarehouseLocation, DispatchRecord)
VALUES
(101, 200, 20, 'Cool Dry Place', 'WH1', 'Record A'),
(102, 150, 30, 'Frozen Storage', 'WH2', 'Record B'),
(103, 300, 25, 'Room Temperature', 'WH3', 'Record C'),
(104, 100, 10, 'Cool Dry Place', 'WH4', 'Record D'),
(105, 250, 35, 'Frozen Storage', 'WH1', 'Record E');

INSERT INTO Employees (EmployeeID, FirstName, LastName, ContactNumber, EmailID, Position, ShiftTiming, YearsExperience, Salary, Location)
VALUES
(1001, 'John', 'Doe', 9876543210, 'john.doe@example.com', 'Manager', '09:00:00', 5, 50000.00, 'NYC'),
(1002, 'Jane', 'Smith', 9876543211, 'jane.smith@example.com', 'Supervisor', '10:00:00', 4, 40000.00, 'LA'),
(1003, 'Mike', 'Johnson', 9876543212, 'mike.johnson@example.com', 'Technician', '08:00:00', 3, 35000.00, 'Chicago'),
(1004, 'Anna', 'Brown', 9876543213, 'anna.brown@example.com', 'Operator', '07:00:00', 2, 25000.00, 'Houston'),
(1005, 'David', 'Lee', 9876543214, 'david.lee@example.com', 'Assistant', '06:00:00', 1, 25000.00, 'Seattle');


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

INSERT INTO Logistics_equipment (Vehicle_ID, Vehicle_Type, Model_Number, Manufacturer, Purchase_Date, Maintenance_Records, Load_Capacity, Registration_Details)
VALUES
(1, 'Truck', 'T1234', 'Tata Motors', '2022-01-15', 'Serviced on 2023-08-20', 5000, 'MH12AB1234'),
(2, 'Van', 'V5678', 'Mahindra', '2023-03-10', 'Serviced on 2024-05-10', 1500, 'MH14CD5678'),
(3, 'Forklift', 'F7890', 'Godrej', '2021-12-05', 'Serviced on 2023-09-01', 1000, 'MH13EF7890'),
(4, 'Container Truck', 'C3456', 'Ashok Leyland', '2020-11-20', 'Serviced on 2024-02-15', 8000, 'MH15GH3456'),
(5, 'Trailer', 'T9876', 'BharatBenz', '2022-05-15', 'Serviced on 2024-01-10', 12000, 'MH16JK9876');

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