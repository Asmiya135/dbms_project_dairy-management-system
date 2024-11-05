CREATE TABLE Admins (
    ID INT PRIMARY KEY,
    USERNAME VARCHAR (225),
    PASSWORD VARCHAR (225)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    ContactNumber VARCHAR(15) UNIQUE,
    EmailID VARCHAR(50) UNIQUE,
    Position VARCHAR(50) NOT NULL,
    Department VARCHAR(50),
    ShiftTiming TIME,
    YearsExperience INT CHECK (YearsExperience >= 0),
    Salary DECIMAL(18, 2) CHECK (Salary >= 0)
);

CREATE TABLE Supplier (
    SupplierID INT NOT NULL,
    SupplierName VARCHAR(255),
    ContactNumber VARCHAR(20),
    EmailID VARCHAR(255),
    Address VARCHAR(255),
    PRIMARY KEY (SupplierID)
);

CREATE TABLE RawMilkIntake (
    SupplierID INT,
    IntakeID INT,
    Quantity INT CHECK (Quantity >= 0),
    FatContent FLOAT NOT NULL,
    PurityLevel FLOAT CHECK (PurityLevel >= 0),
    DeliveryDateTime DATETIME NOT NULL,
    SourceLocation VARCHAR(255) NOT NULL,
    PRIMARY KEY (SupplierID, IntakeID),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

CREATE TABLE Warehouse (
    WarehouseID INT PRIMARY KEY,
    WarehouseName VARCHAR(255) NOT NULL,
    Location VARCHAR(255) NOT NULL,
    StorageCapacity INT NOT NULL,
    TemperatureControlled BOOLEAN NOT NULL
);

CREATE TABLE InventoryManagement (
    ProductID INT PRIMARY KEY,
    WarehouseID INT,  -- Foreign key to reference the Warehouse table
    StockLevel INT NOT NULL,
    ReorderThreshold INT DEFAULT 10 CHECK (ReorderThreshold >= 0),
    StorageCondition VARCHAR(100),
    WarehouseLocation VARCHAR(100),
    DispatchRecord VARCHAR(100),
    FOREIGN KEY (WarehouseID) REFERENCES Warehouse(WarehouseID) -- Establish the relationship
);

CREATE TABLE StockMovement (
    MovementID INT PRIMARY KEY,
    ProductID INT,
    MovementType VARCHAR(28) NOT NULL CHECK (MovementType IN ('IN', 'OUT')),
    MovementDateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    QuantityMoved INT NOT NULL CHECK (QuantityMoved > 0),
    FOREIGN KEY (ProductID) REFERENCES InventoryManagement(ProductID)
);

CREATE TABLE Processed_products (
    Product_ID INT PRIMARY KEY,
    Product_Name VARCHAR(255) NOT NULL,
    Category VARCHAR(100) NOT NULL,
    Production_Date DATE NOT NULL,
    Expiry_Date DATE NOT NULL,
    Batch_Number VARCHAR(50) UNIQUE NOT NULL,
    Packaging_Details VARCHAR(255) NOT NULL,
    Quantity_Produced INT NOT NULL
);

CREATE TABLE Logistics_equipment (
    Vehicle_ID INT PRIMARY KEY,
    Vehicle_Type VARCHAR(100) NOT NULL,
    Maintenance_Records VARCHAR(255),
    Load_Capacity INT NOT NULL,
    Registration_Details VARCHAR(255) NOT NULL
);

CREATE TABLE Equipment (
    MachineID INT PRIMARY KEY,
    EquipmentName VARCHAR(255) NOT NULL,
    MaintenanceSchedule VARCHAR(255),
    Status VARCHAR(50) DEFAULT 'Not Running',
    CapacitySpecification VARCHAR(255),
    PackagingCapacityPerHour INT CHECK (PackagingCapacityPerHour > 0),
    EquipmentType ENUM('Packaging', 'Processing') NOT NULL
);


CREATE TABLE Shift_details (
    EmployeeID INT PRIMARY KEY,
    Shift_Start DATETIME NOT NULL,
    Shift_End DATETIME NOT NULL,
    FOREIGN KEY (Employee_ID) REFERENCES Employees(EmployeeID)
);


CREATE TABLE Maintenance_records (
    MachineID INT PRIMARY KEY,
    Maintenance_Date DATE NOT NULL,
    Technician_Name VARCHAR(100) NOT NULL,
    Issue_Reported VARCHAR(255) NOT NULL,
    Action_Taken VARCHAR(255) NOT NULL,
    FOREIGN KEY (MachineID) REFERENCES Equipment(MachineID)
);

CREATE TABLE VehicleMaintenance (
    VehicleID INT,
    MaintenanceDate DATE,
    IssueReported VARCHAR(255),
    MaintenanceCost DECIMAL(10, 2),
    FOREIGN KEY (VehicleID) REFERENCES Logistics_equipment(Vehicle_ID) -- Assuming Logistics_equipment is the parent table
);


