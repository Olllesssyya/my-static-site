<?php
$name = $_POST["customer-name"];
$phone = $_POST["customer-email"];
$analyse_type = $_POST["analyse-id"];

$to = "info@histolab-dialog.com";
$subject = "повідомлення з сайту";
$message = $name . $phone . $analyse_type;

// Split the message into separate variables
$delimiter = "#"; // Choose a delimiter that is not present in the individual variables
list($name, $phone, $analyse_type) = explode($delimiter, $message);

$headers = "From: $phone\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $message, $headers)) {
    header('Location: index.html');
    exit();
} else {
    echo "Помилка при відправленні листа.";
}
?>