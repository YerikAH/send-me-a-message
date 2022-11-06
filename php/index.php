<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Send me a message</title>
</head>
<body>
    <main>
        <section class="section-relative">
            <form action="email.php" method="POST" class="form-glass">
                <h1 class="title-send-message">Send me a message!</h1>
                <p class="instruction-message">
                When you send your message, the message arrives in Harvey's mailbox
                </p>
                <div class="input-space">
                    <label class="label-input" for="nameInput">Enter your name:</label>
                    <input class="input-text" type="text" id="nameInput" name="nameInput" required>
                    <span class="error-catch">You cannot enter more than 20 characters.</span>
                </div>
                <div class="input-space">
                    <label class="label-input" for="emailInput">Enter your email:</label>
                    <input class="input-text" type="email" name="emailInput" id="emailInput" required>
                    <span class="error-catch"></span>
                </div>
                <div class="input-space">
                    <label class="label-input" for="titleInput">Enter the title:</label>
                    <input class="input-text" type="text" name="titleInput" id="titleInput" required>
                    <span class="error-catch"></span>
                </div>
                <div class="input-space">
                    <label class="label-input" for="messageInput">Enter your message:</label>
                    <textarea name="messageInput" id="messageInput" class="textarea-input input-text" maxlength="255" required></textarea>
                    <span class="error-catch"></span>
                    <span class="span-max-length">
                    max length: 
                        <i id="maxLengthMessage">255</i>
                    </span>
                </div>
                <input type="submit" value="Submit message" class="input-submit" >
            </form>
            <div class="decorator one">        
            </div>
            <div class="decorator two">        
            </div>
            <div class="decorator three">        
            </div>
            <div class="decorator four">        
            </div>
        </section>
        <script src="index.js"></script>

    </main>
</body>
</html>