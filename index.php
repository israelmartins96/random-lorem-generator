<!DOCTYPE html>
<html lang="en-GB">
	<head>
		<title>Random Lorem Generator</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="./assets/css/style.min.css">
	</head>
	<body>
		<!-- Page Container -->
		<div class="container w-100 bg-primary">
			<!-- Skip to Main Content -->
			<a class="skip-link position-fixed" href="#main-content" tabindex="1">Skip to Main Content</a>
			<!-- Main Page Header -->
			<header class="page-title-container text-align-center">
				<!-- Main Page Heading -->
				<h1 class="page-title">Random Lorem Generator (RLG)</h1>
			</header>
			<!-- Main Content Area -->
			<main id="main-content" class="main-content w-100">
				<!-- Intro Section -->
				<div class="intro-section margin-bottom-2">
					<p>Generate unique, distraction-free paragraphs to help you stay focused on layout and design.</p>
					<p>Choose paragraph number → Generate Text → Copy → Use.</p>
					<p>Perfect for mockups, wireframes, or testing layouts — generate pattern-free text on the fly.</p>
				</div>
				<!-- Input Area: Where the User Enters Conditions to Generate Text -->
				<div class="input-area w-100">
					<!-- Input Area Form -->
					<form class="w-100 position-relative" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" nonce="">
						<!-- Input Group for Number of Paragraphs -->
						<div class="input-group paragraph-count w-100">
							<label for="paragraph-count-field" class="input-label display-block w-100">Number of paragraphs</label>
							<div class="input-field-group has-custom-controls w-100 position-relative">
								<input type="number" pattern="[1-9][0-9]*" inputmode="numeric" autofocus="autofocus" name="paragraph-count-field" id="paragraph-count-field" class="display-block w-100" placeholder="Number of paragraphs">
								<div class="quantity-controls position-absolute">
									<button type="button" class="decrement quantity-control">-</button>
									<button type="button" class="increment quantity-control">+</button>
								</div>
							</div>
						</div>
						<!-- Text Generation Trigger Button -->
						<button type="submit" class="generate-text-trigger display-flex flex-centre-all w-100 button-has-icon">
							Generate Text
							<!-- Cogs Vector Icon -->
							<svg xmlns="http://www.w3.org/2000/svg" fill="#111" height="35px" width="35px" viewBox="0 0 141.6 100.6" style="enable-background:new 0 0 141.6 100.6;"><g id="cog-1"><path class="cog" d="M35.9,82c-1.7,0-1.8-0.8-1.9-2.1c-0.2-3.2-0.4-6.4-0.6-9.6c-2.7-0.7-5.3-1.8-7.7-3.2c-0.9,0.8-1.8,1.6-2.7,2.4l-4.5,4c-0.9,0.8-2.1,0.9-2.9,0.2l-7.3-7.3c-1.2-1.2-0.7-1.9,0.2-2.9l2.1-2.4c1.4-1.6,2.8-3.2,4.3-4.8c-1.4-2.4-2.5-5-3.2-7.7l-9.6-0.6C0.9,48,0,47.2,0,46.2L0,41l0-5.2C0,34.2,0.8,34,2.1,34c3.2-0.2,6.4-0.4,9.6-0.6c0.7-2.7,1.8-5.3,3.2-7.7c-1.5-1.6-2.9-3.3-4.4-4.9l-2-2.3c-0.9-1-1.4-1.7-0.2-2.9l7.3-7.3c0.7-0.7,2-0.7,2.9,0.2l4.5,4c0.9,0.8,1.8,1.6,2.7,2.4c2.4-1.4,5-2.5,7.7-3.2c0.2-3.2,0.4-6.4,0.6-9.6C34,0.8,34.2,0,35.9,0L41,0l5.1,0c1,0,1.9,0.9,1.9,2.1l0.6,9.6c2.7,0.7,5.3,1.8,7.7,3.2c0.9-0.8,1.8-1.6,2.7-2.4l4.5-4c0.9-0.8,2.1-0.9,2.9-0.2l7.3,7.3c1.2,1.2,0.7,1.9-0.2,2.9l-2.1,2.4c-1.4,1.6-2.8,3.2-4.3,4.8c1.4,2.4,2.5,5,3.2,7.7l9.6,0.6c1.2,0.1,2.1,0.9,2.1,1.9l0,5.1l0,5.2c0,1.7-0.8,1.8-2.1,1.9c-3.2,0.2-6.4,0.4-9.6,0.6c-0.7,2.7-1.8,5.3-3.2,7.7c0.7,0.8,1.5,1.6,2.2,2.5l4.2,4.7c0.8,0.9,0.9,2.1,0.2,2.9l-7.3,7.3c-1.2,1.2-1.9,0.7-2.9-0.2l-2.6-2.3c-1.5-1.4-3.1-2.7-4.6-4.1c-2.4,1.4-5,2.5-7.7,3.2l-0.6,9.6C48,81.1,47.2,82,46.2,82L41,82L35.9,82z M25.5,64.6l0.6,0.4c2.6,1.6,5.4,2.8,8.5,3.5l0.7,0.2l0,0.7c0.2,3.4,0.4,6.9,0.6,10.3c0,0.1,0,0.2,0,0.3l5.1,0l5,0c0,0,0.1-0.1,0.1-0.2l0.7-11.1l0.7-0.2c3-0.7,5.8-1.9,8.5-3.5l0.6-0.4l0.6,0.5c1.7,1.5,3.4,3,5.1,4.6l2.6,2.3c0.1,0.1,0.1,0.1,0.2,0.2l7.1-7.1c0-0.1-0.1-0.1-0.1-0.2l-4.2-4.7c-0.9-1-1.8-2-2.7-3l-0.5-0.6l0.4-0.6c1.6-2.6,2.8-5.4,3.5-8.5l0.2-0.7l0.7,0c3.4-0.2,6.9-0.4,10.3-0.6c0.1,0,0.2,0,0.3,0l0-5.1l0-5c0,0-0.1-0.1-0.2-0.1l-11.1-0.7l-0.2-0.7c-0.7-3-1.9-5.8-3.5-8.5l-0.4-0.6l0.5-0.6c1.6-1.8,3.2-3.6,4.7-5.4l2.1-2.4c0.1-0.1,0.1-0.1,0.2-0.2L65,9.9c-0.1,0-0.1,0.1-0.2,0.1l-4.5,4c-1.1,1-2.2,1.9-3.2,2.9l-0.6,0.5L55.9,17c-2.6-1.6-5.4-2.8-8.5-3.5l-0.7-0.2L46.1,2.3C46.1,2.1,46,2,46,2l-5,0L36,2c0,0.1,0,0.2,0,0.3c-0.2,3.4-0.4,6.9-0.6,10.3l0,0.7l-0.7,0.2c-3,0.7-5.9,1.9-8.5,3.5l-0.6,0.4l-0.6-0.5c-1.1-1-2.1-1.9-3.2-2.9l-4.5-4C17.1,9.9,17,9.9,17,9.9L9.9,17c0.1,0.1,0.1,0.1,0.2,0.2l2,2.3c1.6,1.8,3.2,3.6,4.9,5.5l0.5,0.6L17,26.1c-1.6,2.6-2.8,5.4-3.5,8.4l-0.2,0.7l-0.7,0c-3.4,0.2-6.9,0.4-10.3,0.6c-0.1,0-0.2,0-0.3,0L2,41l0,5c0,0,0.1,0.1,0.2,0.1l11.1,0.7l0.2,0.7c0.7,3,1.9,5.8,3.5,8.5l0.4,0.6l-0.5,0.6c-1.6,1.8-3.2,3.6-4.7,5.4L10,64.8C10,64.9,9.9,65,9.9,65l7.1,7.1c0.1,0,0.1-0.1,0.2-0.1l4.5-4c1.1-1,2.2-1.9,3.2-2.9L25.5,64.6z M65.1,9.9L65.1,9.9L65.1,9.9z M41,60c-4.9,0-9.7-1.9-13.4-5.6c-7.4-7.4-7.4-19.5,0-26.9l0,0l0,0C31.2,24,35.9,22,41,22c5.1,0,9.8,2,13.4,5.6c7.4,7.4,7.4,19.5,0,26.9C50.7,58.1,45.9,60,41,60zM41,24c-4.5,0-8.8,1.8-12,5l0,0c-6.6,6.6-6.6,17.4,0,24c6.6,6.6,17.4,6.6,24,0s6.6-17.4,0-24C49.8,25.8,45.5,24,41,24z M28.3,28.3L28.3,28.3L28.3,28.3z"/></g><g id="cog-2"><path class="cog" d="M102.6,100.6c-0.2,0-0.4,0-0.6-0.1l-7.4-3c-1.4-0.6-1.2-1.3-0.9-2.4l0.9-2.6c0.5-1.4,1-2.9,1.5-4.3c-1.7-1.2-3.1-2.7-4.4-4.3l-6.8,2.4c-1,0.4-2,0-2.4-0.8l-3.1-7.3c-0.6-1.4,0.1-1.8,1-2.3c2.2-1.1,4.3-2.2,6.5-3.2c-0.3-2.1-0.3-4.1-0.1-6.2c-1.4-0.7-2.8-1.3-4.1-2l-2.4-1.2c-1-0.5-1.6-0.9-1.1-2.3l3-7.4c0.3-0.8,1.4-1.2,2.4-0.9l4.4,1.5c0.8,0.3,1.6,0.5,2.5,0.8c1.2-1.7,2.7-3.1,4.3-4.4c-0.8-2.3-1.6-4.6-2.4-6.9c-0.4-1-0.5-1.8,0.8-2.4l7.3-3.1c0.9-0.4,1.8,0.1,2.3,1.1l3.2,6.5c2.1-0.3,4.1-0.3,6.2-0.1c0.4-0.8,0.7-1.6,1.1-2.3l2-4.2c0.5-1,1.4-1.4,2.3-1.1l0,0l7.4,3c1.4,0.6,1.2,1.3,0.9,2.4l-0.9,2.5c-0.5,1.5-1,2.9-1.5,4.4c1.7,1.2,3.1,2.7,4.4,4.3l6.8-2.4c1-0.4,2,0,2.4,0.8l3.1,7.3c0.6,1.4-0.1,1.8-1,2.3c-2.2,1.1-4.3,2.2-6.5,3.2c0.3,2.1,0.3,4.1,0.1,6.2c0.8,0.4,1.6,0.7,2.4,1.1l4.2,2c1,0.5,1.4,1.4,1.1,2.3l-3,7.4c-0.6,1.4-1.3,1.2-2.4,0.9l-2.4-0.8c-1.5-0.5-3-1-4.5-1.5c-1.2,1.7-2.7,3.1-4.3,4.4l2.4,6.8c0.4,1,0,2-0.8,2.4l-7.3,3.1c-1.4,0.6-1.8-0.1-2.3-1c-1.1-2.2-2.2-4.3-3.2-6.5c-2.1,0.3-4.1,0.3-6.2,0.1c-0.4,0.8-0.7,1.6-1.1,2.4l-2,4.2C104,100.1,103.3,100.6,102.6,100.6z M95.7,95.7l6.9,2.8l2-4.2c0.5-1,1-2,1.4-3l0.3-0.7l0.7,0.1c2.3,0.4,4.7,0.4,7-0.1l0.7-0.1l0.3,0.7c1.2,2.4,2.4,4.8,3.6,7.2l6.8-2.9l-2.9-8.2l0.6-0.4c1.9-1.4,3.6-3.1,4.9-5l0.4-0.6l0.7,0.2c1.7,0.6,3.5,1.2,5.2,1.8l2.3,0.8l2.8-6.9l-4.2-2c-1-0.5-2-1-3-1.4l-0.7-0.3l0.1-0.7c0.4-2.3,0.4-4.7-0.1-7l-0.1-0.7l0.7-0.3c2.4-1.2,4.8-2.4,7.2-3.6l-2.9-6.8l-8.2,2.9l-0.4-0.6c-1.4-1.9-3.1-3.6-5-4.9l-0.6-0.4l0.2-0.7c0.6-1.7,1.1-3.4,1.7-5.1l0.8-2.5l-6.9-2.8l-2,4.2c-0.5,1-1,2-1.4,3l-0.3,0.7l-0.7-0.1c-2.3-0.4-4.7-0.4-7,0.1l-0.7,0.1l-3.9-7.8l-6.8,2.9c0.9,2.5,1.8,5,2.7,7.5l0.3,0.7l-0.6,0.4c-1.9,1.4-3.6,3.1-4.9,5l-0.4,0.6l-0.7-0.2c-1-0.4-2.1-0.7-3.2-1.1l-4.4-1.5l-2.8,6.9l2.4,1.1c1.6,0.8,3.2,1.5,4.8,2.3l0.7,0.3L88.9,66c-0.4,2.3-0.3,4.7,0.1,7l0.1,0.7l-0.7,0.3c-2.4,1.2-4.8,2.4-7.2,3.6l2.9,6.8l8.2-2.9l0.4,0.6c1.4,1.9,3.1,3.6,5,4.9l0.6,0.4l-0.2,0.7c-0.6,1.7-1.1,3.4-1.7,5L95.7,95.7z M110.3,84.2c-3.8,0-7.7-1.5-10.6-4.4c-5.8-5.8-5.8-15.3,0-21.1c5.8-5.8,15.3-5.8,21.1,0c5.8,5.8,5.8,15.3,0,21.1C118,82.8,114.1,84.2,110.3,84.2z M110.3,56.3c-3.5,0-6.7,1.3-9.2,3.8s-3.8,5.7-3.8,9.2s1.3,6.7,3.8,9.2s5.7,3.8,9.2,3.8s6.7-1.3,9.2-3.8s3.8-5.7,3.8-9.2s-1.3-6.7-3.8-9.2S113.8,56.3,110.3,56.3z"/></g></svg>
						</button>
						<!-- Reset Button -->
						<button type="reset" class="reset-trigger display-flex flex-centre-all w-100 position-relative button-text-colour-default bg-primary button-has-icon button-disabled">
							Reset
							<!-- Reset Vector Icon -->
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.42 147.04" fill="#111" height="35px" width="35px"><g id="Layer_2" data-name="Layer 2"><g id="reset"><path id="reset-arrow" data-name="reset" d="M64.18,143a62.16,62.16,0,0,1-14.57-1.73C20.49,134.36,8,109.45,5.73,104.52-4.38,82.05,1.37,61.42,4.32,53.6A1,1,0,0,1,5.6,53a1,1,0,0,1,.59,1.29c-2.86,7.59-8.45,27.61,1.37,49.4,2.15,4.78,14.3,28.93,42.51,35.67,27.91,6.66,53.18-7.61,65.85-24.71,9-12.17,13.4-28.27,12.34-45.32a60.37,60.37,0,0,0-4.11-19.2,58.81,58.81,0,0,0-11-17.81C100.83,18.81,85.37,15.58,80.29,14.52a65.41,65.41,0,0,0-12.35-1.37h-.71c-19.52,0-35.78,9.7-46,17.89h0l27.23,5.68a1,1,0,0,1-.41,2l-27.7-5.77a2.38,2.38,0,0,1-1.87-2.77L23.77.82a1,1,0,0,1,2,.36l-5,27.71C31.37,20.52,48,10.9,68,11.15A67.88,67.88,0,0,1,80.7,12.56c5.24,1.1,21.17,4.42,34,18.42A60.6,60.6,0,0,1,126,49.4a62.67,62.67,0,0,1,4.25,19.81c1.09,17.53-3.43,34.09-12.73,46.64C106.71,130.45,87,143,64.18,143Z"/></g></g></svg>
						</button>
					</form>
				</div>
				<!-- Output Area: Where Generated Text is Output -->
				<div class="output-area w-100">
					<!-- Copy text button -->
					<button type="button" name="copy-text" class="copy-text display-flex flex-centre-all w-100 position-relative button-has-icon button-disabled">
						Copy
						<!-- Copy Vector Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 142" fill="#111" height="35px" width="35px"><g id="Layer_2" data-name="Layer 2"><g id="copy-all"><path id="copy-all-path" data-name="copy-all" d="M89.1,142h-12v-2h12Zm-24,0h-12v-2h12Zm-24,0h-12v-2h12Zm-24,0H5.1v-2h12Zm83.72-2.76h-2v-12h2ZM2,132.63H0v-12H2Zm0-24H0v-12H2Zm0-24H0v-12H2Zm0-24H0v-12H2Zm0-24H0v-12H2ZM17.33,20H7.84V18h9.49ZM119,124H22.18a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H119a2,2,0,0,1,2,2V122A2,2,0,0,1,119,124ZM22.18,2V122H119V2Z"/></g></g></svg>
					</button>
					<!-- Generated Text Container -->
					<div class="generated-text-area empty"></div>
					<!-- Copiable form of generated text -->
					<textarea name="copiable-generated-text" class="copiable-generated-text w-100" style="height: 0; opacity: 0; position: absolute; left: -1000%; pointer-events: none;"></textarea>
				</div>
			</main>
		</div>
		<!-- SCRIPTS -->
		<!-- Random Lorem Generator Script -->
		<script src="./assets/js/random-lorem-generator-bundled.min.js" charset="utf-8" defer></script>
	</body>
</html>
