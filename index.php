<!DOCTYPE html>
<html lang="en-GB">
	<head>
		<title>LoremPress: Demo Text Generator | JavaScript | MySandbox</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="./css/style.css">
	</head>
	<body>
		<!-- Page Container -->
		<div class="container">
			<!-- Skip to Main Content -->
			<a class="skip-link" href="#main-content" tabindex="1">Skip to Main Content</a>
			<!-- Main Page Header -->
			<header class="page-title-container">
				<!-- Main Page Heading -->
				<h1 class="page-title">LoremPress: Demo Text Generator | JavaScript</h1>
			</header>
			<!-- Main Content Area -->
			<main id="main-content" class="main-content">
				<!-- Input Area: Where the User Enters Conditions to Generate Text -->
				<div class="input-area i-o-section">
					<!-- Input Area Form -->
					<form class="lorempress-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
						<!-- Input Group for Number of Paragraphs -->
						<div class="input-group paragraph-count">
							<label for="paragraph-count-field" class="input-label display-block">Number of paragraphs</label>
							<input type="number" name="paragraph-count-field" id="paragraph-count-field" class="display-block" placeholder="Number of paragraphs">
						</div>
						<!-- Text Generation Trigger Button -->
						<button type="submit" class="generate-text-button">Generate Text</button>
					</form>
				</div>
				<!-- Output Area: Where Generated Text is Output -->
				<div class="output-area i-o-section">
					<!-- Generated Text Container -->
					<div class="generated-text-area empty"></div>
				</div>
			</main>
		</div>
		<!-- SCRIPTS -->
		<!-- Custom Input Script -->
		<script src="./js/custom-input.js" charset="utf-8"></script>
		<!-- Text Generator Script -->
		<script src="./js/lorempress.js" charset="utf-8"></script>
	</body>
</html>
