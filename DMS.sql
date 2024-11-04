-- Table for Raw Milk Intake
CREATE TABLE RawMilkIntake (
    SupplierID INT PRIMARY KEY,
    Quantity INT,
    FatContent FLOAT,
    PurityLevel FLOAT,
    DeliveryDateTime DATETIME,
    SourceLocation VARCHAR(255),
    
);

CREATE TABLE RawMilkIntake (
    SupplierID INT PRIMARY KEY,
    Quantity INT,
    FatContent FLOAT,
    PurityLevel FLOAT,
    DeliveryDateTime DATETIME,
    SourceLocation VARCHAR(255),
    FOREIGN KEY (Enum) REFERENCES Employee(Enum)
);

INSERT INTO RawMilkIntake (SupplierID, Quantity, FatContent, PurityLevel, DeliveryDateTime, SourceLocation) VALUES
(1, 1500, 3.80, 98.50, '2024-10-05 08:15:00', 'Farm A'),
(2, 1200, 3.95, 97.80, '2024-10-05 10:30:00', 'Farm B'),
(3, 1800, 4.10, 99.00, '2024-10-05 07:45:00', 'Farm C'),
(4, 900, 3.65, 96.75, '2024-10-05 11:00:00', 'Farm D'),
(5, 2100, 4.25, 99.50, '2024-10-05 09:00:00', 'Farm E'),
(6, 2500, 4.8, 95.30, '2024-10-05 09:30:00', 'Farm F');



-- Table for Processed Products
CREATE TABLE ProcessedProducts (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(255),
    Category VARCHAR(50),
    ProductionDate DATE,
    ExpiryDate DATE,
    BatchNumber VARCHAR(50),
    QuantityProduced INT
);

-- Table for Inventory Management
CREATE TABLE InventoryManagement (
    ProductID INT PRIMARY KEY,
    StockLevel INT,
    ReorderThreshold INT,
    StorageCondition VARCHAR(255),
    WarehouseLocation VARCHAR(255),
    DispatchRecord VARCHAR(255),
    FOREIGN KEY (ProductID) REFERENCES ProcessedProducts(ProductID)
);

-- Combined Table for Employees (Factory and Warehouse)
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    ContactNumber VARCHAR(20),
    EmailID VARCHAR(255),
    Position VARCHAR(50),
    Department VARCHAR(50),  -- (e.g., Processing, Quality Control, Inventory Management, Logistics Coordination)
    ShiftTiming VARCHAR(50),
    YearsExperience INT,
    Salary DECIMAL(10, 2),
    Location VARCHAR(50)  -- (e.g., Factory, Warehouse)
);

-- Table for Processing Equipment
CREATE TABLE ProcessingEquipment (
    MachineID INT PRIMARY KEY,
    EquipmentName VARCHAR(255),
    ModelNumber VARCHAR(50),
    Manufacturer VARCHAR(255),
    ManufacturingYear INT,
    PurchaseDate DATE,
    MaintenanceSchedule VARCHAR(255),
    Status VARCHAR(50) DEFAULT 'Not Running',
    CapacitySpecification VARCHAR(255)
);

-- Table for Packaging Equipment
CREATE TABLE PackagingEquipment (
    MachineID INT PRIMARY KEY,
    EquipmentName VARCHAR(255),
    ModelNumber VARCHAR(50),
    Manufacturer VARCHAR(255),
    ManufacturingYear INT,
    PurchaseDate DATE,
    MaintenanceSchedule VARCHAR(255),
    PackagingCapacityPerHour INT
);

-- Table for Logistics Equipment
CREATE TABLE LogisticsEquipment (
    VehicleID INT PRIMARY KEY,
    VehicleType VARCHAR(50),
    ModelNumber VARCHAR(50),
    Manufacturer VARCHAR(255),
    PurchaseDate DATE,
    MaintenanceRecords VARCHAR(255),
    LoadCapacity DECIMAL(10, 2),
    RegistrationDetails VARCHAR(255)
);

-- Table for Supplier (with NOT NULL constraint on SupplierID)
CREATE TABLE Supplier (
    SupplierID INT NOT NULL,
    SupplierName VARCHAR(255),
    ContactNumber VARCHAR(20),
    EmailID VARCHAR(255),
    Address VARCHAR(255),
    PRIMARY KEY (SupplierID),
    FOREIGN KEY (SupplierID) REFERENCES RawMilkIntake(SupplierID) 
);

INSERT INTO Supplier (SupplierID, SupplierName, ContactNumber, EmailID, Address) VALUES
(1, 'Green Farms', '123-456-7890', 'greenfarms@mail.com', '123 Farm Road, City A'),
(2, 'Dairy Delight', '987-654-3210', 'dairy_delight@mail.com', '456 Milk Lane, City B'),
(3, 'FreshMilk Suppliers', '555-123-4567', 'freshmilk@mail.com', '789 Cream Street, City C'),
(4, 'Pure Dairy', '222-333-4444', 'puredairy@mail.com', '321 Butter Ave, City D'),
(5, 'Sunshine Farms', '111-222-3333', 'sunshinefarms@mail.com', '654 Grassland Blvd, City E');



-- Strong Entity for Warehouse
CREATE TABLE Warehouse (
    WarehouseID INT PRIMARY KEY,
    WarehouseName VARCHAR(255) NOT NULL,
    Location VARCHAR(255) NOT NULL,
    StorageCapacity INT NOT NULL,
    TemperatureControlled BOOLEAN NOT NULL,
    SecuritySystem VARCHAR(255)
);

INSERT INTO Warehouse (WarehouseID, WarehouseName, Location, StorageCapacity, TemperatureControlled, SecuritySystem, ManagerID) VALUES
(1, 'Central Warehouse', '123 Industrial Park, City A', 50000, TRUE, 'Advanced CCTV System', 101),
(2, 'North Storage Facility', '456 North Road, City B', 30000, FALSE, 'Basic Security Alarm', 102),
(3, 'East Distribution Hub', '789 East Blvd, City C', 45000, TRUE, '24/7 Surveillance', 103),
(4, 'Southside Depot', '321 South Ave, City D', 25000, FALSE, NULL, 104),
(5, 'West Logistics Center', '654 West Drive, City E', 40000, TRUE, 'Biometric Access Control', 105);



-- Table for StockMovement (weak entity related to InventoryManagement)
CREATE TABLE StockMovement (
    MovementID INT,
    ProductID INT,
    MovementType VARCHAR(50), -- (e.g., "IN" for incoming stock, "OUT" for outgoing stock)
    MovementDateTime DATETIME,
    QuantityMoved INT,
    PRIMARY KEY (MovementID, ProductID),
    FOREIGN KEY (ProductID) REFERENCES InventoryManagement(ProductID) 
);

-- Table for ShiftDetails (weak entity related to FactoryEmployees and WarehouseEmployees)
CREATE TABLE Shifts (
    ShiftID INT,
    EmployeeID INT,
    ShiftStart DATETIME,
    ShiftEnd DATETIME,
    PRIMARY KEY (ShiftID, EmployeeID),
    FOREIGN KEY (EmployeeID) REFERENCES FactoryEmployees(EmployeeID) 
);

-- Table for MaintenanceRecords (weak entity related to ProcessingEquipment and PackagingEquipment)
CREATE TABLE MaintenanceRecords (
    RecordID INT,
    MachineID INT,
    MaintenanceDate DATE,
    TechnicianName VARCHAR(255),
    IssueReported VARCHAR(255),
    ActionTaken VARCHAR(255),
    PRIMARY KEY (RecordID, MachineID),
    FOREIGN KEY (MachineID) REFERENCES ProcessingEquipment(MachineID) 
);

-- Table for VehicleMaintenance (weak entity related to LogisticsEquipment)
CREATE TABLE VehicleMaintenance (
    MaintenanceID INT,
    VehicleID INT,
    MaintenanceDate DATE,
    IssueReported VARCHAR(255),
    MaintenanceCost DECIMAL(10, 2),
    PRIMARY KEY (MaintenanceID, VehicleID),
    FOREIGN KEY (VehicleID) REFERENCES LogisticsEquipment(VehicleID) 
);

