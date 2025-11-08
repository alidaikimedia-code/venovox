<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer classes
require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"] ?? ''));
    $subject = strip_tags(trim($_POST["subject"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''), ENT_QUOTES, 'UTF-8');

    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "Please complete all required fields.";
        exit;
    }

    $toRecipients = ["it_support@venovox.com"];
    $bccRecipients = ["troubleshoot@venovox.com"];

    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = '
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin:0; padding:0; }
        .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 8px; overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background-color: #C00000; color: #fff; padding: 16px; text-align:center; font-size: 20px; }
        .content { padding: 24px; color: #333; }
        .content p { margin: 8px 0; }
        .label { font-weight:bold; color:#C00000; }
        .footer { text-align:center; padding: 12px; font-size:12px; color:#888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">New Inquiry from Venovox Website</div>
        <div class="content">
          <p><span class="label">Full Name:</span> ' . $name . '</p>
          <p><span class="label">Email Address:</span> ' . $email . '</p>
          <p><span class="label">Phone Number:</span> ' . $phone . '</p>
          <p><span class="label">Subject:</span> ' . $subject . '</p>
          <p><span class="label">Message:</span><br>' . nl2br($message) . '</p>
        </div>
        <div class="footer">This email was generated automatically from the Venovox contact form.</div>
      </div>
    </body>
    </html>';

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.office365.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'it_support@venovox.com';
        $mail->Password = 'gbvtddtknzszdqfh';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('it_support@venovox.com', 'Venovox Website');
        $mail->addReplyTo($email, $name);

        foreach ($toRecipients as $to) {
            $mail->addAddress($to);
        }
        foreach ($bccRecipients as $bcc) {
            $mail->addBCC($bcc);
        }

        // Email content
        $mail->isHTML(true);
        $mail->Subject = $email_subject;
        $mail->Body = $email_body;

        // Send
        $mail->send();
        echo "success";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Error sending message: {$mail->ErrorInfo}";
    }
}
?>
