<?php
// Your Discord Webhook URL
$webhook_url = 'https://discord.com/api/webhooks/1390364622271545375/B1q7ob6Q2vKd6VGt5alO92kQ8D5S9lec8Ub3iPFtqD1tHV1T0Up5uXZHuiKBbVncp3k7'; // Replace with your webhook

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = trim($_POST['content'] ?? '');

    if (empty($content)) {
        die('No content submitted.');
    }

    $payload = json_encode([
        "content" => $content
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    $ch = curl_init($webhook_url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    $response = curl_exec($ch);
    curl_close($ch);

    echo "Submitted successfully.";
} else {
    echo "Invalid request.";
}
?>
