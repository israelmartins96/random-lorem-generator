<!DOCTYPE html>
<html lang="en-GB">
	<head>
		<title>LoremPress: Demo Text Generator | JavaScript | MySandbox</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/mysandbox/assets/css/style.css">
		<link rel="stylesheet" href="./css/style.css">
	</head>
	<body>
		<div class="container">
			<a class="skip-link" href="#main-content" tabindex="1">Skip to Main Content</a>
			<header class="page-title-container">
				<h1 class="page-title">LoremPress: Demo Text Generator | JavaScript</h1>
			</header>
			<main id="main-content" class="main-content">
				<div class="input-area">
					<h2 class="heading">Input Area</h2>
					<form class="lorempress-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
						<div class="input-group">
							<label for="paragraph-count-field" class="input-label">Number of paragraphs:</label>
							<input type="number" name="paragraph-count-field" id="paragraph-count-field" placeholder="Number of paragraphs">
						</div>
						<button type="submit" class="generate-text-button">Generate Text</button>
					</form>
				</div>
				<div class="output-area">
					<h2 class="heading">Output Area</h2>
					<div class="generated-text"></div>
				</div>
			</main>
		</div>
		<script src="./js/custom-input.js" charset="utf-8"></script>
		<script src="./js/lorempress.js" charset="utf-8"></script>
	</body>
</html>
