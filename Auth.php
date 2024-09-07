<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Allows all origins. You can restrict this to specific domains if needed.
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allows specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allows specific headers

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Handle preflight requests
    exit(0);
}

// Database connection
$servername = "localhost";
$username = "root";
$password = ""; // Your database password
$dbname = "login";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(array("status" => "error", "message" => "Connection failed: " . $conn->connect_error)));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['username']) || !isset($input['password'])) {
        echo json_encode(array("status" => "error", "message" => "Username and password are required"));
        exit;
    }
    
    $username = $conn->real_escape_string($input["username"]);
    $password = $input["password"];
    
    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($query);
    
    if ($result->num_rows > 0) {
        $user_data = $result->fetch_assoc();
        if (password_verify($password, $user_data['password'])) {
            $response = array("status" => "success", "message" => "Login successful", "user_data" => $user_data);
        } else {
            $response = array("status" => "error", "message" => "Invalid username or password");
        }
    } else {
        $response = array("status" => "error", "message" => "Invalid username or password");
    }
    
    echo json_encode($response);
}

$conn->close();
?>
