CREATE TABLE PackagingEquipment (
    MachineID INT PRIMARY KEY,
    EquipmentName VARCHAR(50) NOT NULL,
    ModelNumber VARCHAR(50) UNIQUE,
    Manufacturer VARCHAR(50) NOT NULL,
    ManufacturingYear YEAR CHECK (ManufacturingYear > 1990),
    PurchaseDate DATE,
    MaintenanceSchedule VARCHAR(100),
    PackagingCapacityPerHour INT CHECK (PackagingCapacityPerHour > 0)
);

CREATE TABLE InventoryManagement (
    ProductID INT PRIMARY KEY,
    StockLevel INT NOT NULL,
    ReorderThreshold INT DEFAULT 10 CHECK (ReorderThreshold >= 0),
    StorageCondition VARCHAR(100),
    WarehouseLocation VARCHAR(100),
    DispatchRecord VARCHAR(100)
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
    Salary DECIMAL(18, 2) CHECK (Salary >= 0),
    Location VARCHAR(100)
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
    Model_Number VARCHAR(100) NOT NULL,
    Manufacturer VARCHAR(100) NOT NULL,
    Purchase_Date DATE NOT NULL,
    Maintenance_Records VARCHAR(255),
    Load_Capacity INT NOT NULL,
    Registration_Details VARCHAR(255) NOT NULL
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
    FOREIGN KEY (MachineID) REFERENCES PackagingEquipment(MachineID)
);

