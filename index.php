<!DOCTYPE html>
<html lang="en-GB">
	<head>
		<title>LoremPress: Demo Text Generator | JavaScript | MySandbox</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="./assets/css/style.css">
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
				<div class="input-area">
					<!-- Input Area Form -->
					<form class="lorempress-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
						<!-- Input Group for Number of Paragraphs -->
						<div class="input-group paragraph-count">
							<label for="paragraph-count-field" class="input-label display-block">Number of paragraphs</label>
							<input type="number" name="paragraph-count-field" id="paragraph-count-field" class="display-block" placeholder="Number of paragraphs">
						</div>
						<!-- Text Generation Trigger Button -->
						<button type="submit" class="generate-text-trigger">Generate Text</button>
						<!-- Reset Button -->
						<button type="reset" class="reset-trigger active">Reset</button>
					</form>
				</div>
				<!-- Output Area: Where Generated Text is Output -->
				<div class="output-area">
					<!-- Copy text button -->
					<button type="button" name="copy-text" class="copy-text active">Copy</button>
					<!-- Generated Text Container -->
					<div class="generated-text-area empty"></div>
					<!-- Copiable form of generated text -->
					<textarea name="copiable-generated-text" class="copiable-generated-text" style="height: 0; opacity: 0; position: absolute; left: -1000%; pointer-events: none;"></textarea>
				</div>
			</main>
		</div>
		<!-- SCRIPTS -->
		<!-- Custom Input Script -->
		<script src="./assets/js/custom-input.js" charset="utf-8" defer></script>
		<!-- Text Generator Script -->
		<script src="./assets/js/lorempress.js" charset="utf-8" defer></script>
	</body>
</html>
