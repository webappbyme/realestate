<?php
$servername = "localhost"; // Use your database server
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "real_estate"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get search parameters
$location = $_GET['location'] ?? '';
$type = $_GET['type'] ?? '';
$maxPrice = $_GET['maxPrice'] ?? 5000000;

// Build SQL query
$sql = "SELECT * FROM properties WHERE 1=1";
if (!empty($location)) {
    $sql .= " AND location LIKE '%" . $conn->real_escape_string($location) . "%'";
}
if (!empty($type)) {
    $sql .= " AND type = '" . $conn->real_escape_string($type) . "'";
}
if (!empty($maxPrice)) {
    $sql .= " AND price <= " . $conn->real_escape_string($maxPrice);
}

$result = $conn->query($sql);

$properties = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
}

echo json_encode($properties);

$conn->close();
?>
