## Welcome to Random Lorem Generator\!

We're thrilled you're interested in contributing to the Random Lorem Generator (RLG) project\! RLG is a free, open-source tool designed to help creators focus on design by providing truly random Lorem Ipsum. Your contributions, big or small, help make RLG even better for everyone.

This guide will help you understand our contribution process, coding standards, and how to get your contributions accepted.

-----

## 🧐 What Can You Contribute?

We welcome all sorts of contributions\! Here are the main areas where you can help:

  * **Bug Reports:** Found a glitch or something not working as expected? Let us know\!
  * **Feature Suggestions:** Have an idea for a new feature or an improvement? We'd love to hear it.
  * **Code Contributions:** Ready to dive in and write some code? Fix bugs, add features, improve performance.
  * **Documentation Improvements:** Spotted a typo, an unclear explanation, or something missing in our guides or README? Help us make it clearer.
  * **Translation:** Help us make RLG accessible to a wider audience by contributing translations.

-----

## 🛠️ Getting Started: Local Setup

To get RLG up and running on your local machine, follow these steps:

1.  **Fork the Repository:** Start by forking the `random-lorem-generator` repository to your GitHub account.
2.  **Clone Your Fork:** Clone your forked repository to your local machine using Git:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/random-lorem-generator.git
    cd random-lorem-generator
    ```
    *(Remember to replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.)*
3.  **Install Gulp Dependencies:** RLG uses a Gulp 5 workflow. You'll need Node.js and npm installed to manage project dependencies.
    ```bash
    npm install
    ```
    This will install all the necessary Gulp packages for development. You can refer to [the specific Gulp workflow for more details](https://github.com/israelmartins96/gulp).
4.  **Run a Local Development Server:** The project pages use the `.php` file extension (e.g., `index.php`). Therefore, you'll need a local server that supports PHP. XAMPP was used during development, but any equivalent (like Laragon, WAMP, or MAMP) will work fine. Set up your server to point to the project's root directory.

-----

## 📜 Code Style Guidelines

To maintain consistency and readability across the codebase, please adhere to these guidelines:

  * **JavaScript:**
      * Use **strict equality** (`===` and `!==`).
      * **Indent with 4 spaces**, not tabs.
      * Use `const` and `let` instead of `var`.
      * Prefer **arrow functions** for concise functions, especially for callbacks, but use traditional `function` declarations for top-level functions or methods that require their own `this` context.
      * **Semicolons** are required at the end of statements.
      * Keep lines reasonably short, ideally **under 80 characters**.
      * Follow the [JSDoc comment format](https://jsdoc.app/index.html) for function, class, and complex variable documentation.
      * **Variable naming:** Use `camelCase` for variables and function names.
      * **Class naming:** Use `PascalCase` for class names.
      * **Constant naming:** Use `UPPER_SNAKE_CASE` for global constants.
  * **CSS/Sass (SCSS):**
      * Use **4 spaces for indentation**.
      * Follow the **BEM (Block Element Modifier)** naming convention where applicable, for clear and modular CSS. Use only `--` as a separator throughout the name, e.g., `menu--item--active` instead of `menu__item--active`.
      * Organise your SCSS files logically (e.g., by component, utility, or page section).
      * Prefer **lowercase property names** and values.
      * Use **hyphen-case** for class names.

-----

## 🧪 Testing

Currently, we don't have a formal testing setup for RLG. This is an area where contributions would be highly valued\! If you're interested in helping us implement a testing framework (e.g., Jest for JavaScript, PHPUnit for PHP) and write initial tests, please open an issue to discuss your ideas.

-----

## 🌿 Branch Naming Conventions

To keep our repository organised and easy to navigate, please follow these guidelines when naming your branches:

  * Use `--` to separate the prefix from the branch topic.
  * Keep names scoped, descriptive, and easy to read.
  * Apply consistent formatting across all team branches.
  * Include **contributor initials** (e.g., `AB`) for traceability where appropriate.

**Format:** `prefix--topic--[optional-id/initials]`

**Examples:**

  * `feature--user-login--JIRA-42`
  * `chore--cleanup-logs--AB`

You can also **nest segments in the topic** for layered context, which is especially useful for organising by domain, service, or functionality. These nested topic segments are not additional prefixes, but simply a way to express structure—think of them like folders within folders.

**Nested Topic Examples:**

  * `feature--api--authentication` → (Prefix: `feature--` → Topic: `api > authentication`)
  * `docs--backend--setup` → (Prefix: `docs--` → Topic: `backend > setup`)
  * `test--integration--payments` → (Prefix: `test--` → Topic: `integration > payments`)

### Recognised Branch Prefixes:

  * **`feature--`**: New functionality or enhancements.
      * **Example:** `feature--user-authentication`
  * **`bugfix--`**: Fixing a known bug.
      * **Example:** `bugfix--login-crash-on-ios`
  * **`hotfix--`**: Urgent fix in production.
      * **Example:** `hotfix--payment-timeout`
  * **`release--`**: Preparing for a release version.
      * **Example:** `release--v1.2.0`
  * **`chore--`**: Routine tasks or maintenance (non-functional).
      * **Example:** `chore--update-gitignore`
  * **`refactor--`**: Code restructuring without changing behaviour.
      * **Example:** `refactor--user-profile-form`
  * **`style--`**: UI or CSS updates (visuals only).
      * **Example:** `style--homepage-header`
  * **`docs--`**: Documentation changes only.
      * **Example:** `docs--api-endpoints-readme`
  * **`test--`**: Working on or updating tests.
      * **Example:** `test--user-flow-coverage`
  * **`ci--` / `cd--`**: Changes related to CI/CD pipelines.
      * **Example:** `ci--setup-github-actions`
  * **`perf--`**: Performance improvements.
      * **Example:** `perf--image-loading-optimization`
  * **`build--`**: Changes in build system (e.g., webpack, bundling).
      * **Example:** `build--minify-config-update`
  * **`config--`**: Configuration changes (non-app logic).
      * **Example:** `config--env-vars-update`
  * **`maintenance--`**: General upkeep—mixed types of minor updates.
      * **Example:** `maintenance--style-docs-cleanup`
  * **`env--`**: Environment-specific configuration (e.g., dev, staging, prod).
      * **Example:** `env--dev-db-url-update`
  * **`infra--`**: Infrastructure-related changes (servers, DB, etc.).
      * **Example:** `infra--setup-cloud-storage`
  * **`merge--`**: Used temporarily for merging branches.
      * **Example:** `merge--feature-into-develop`
  * **`sandbox--`**: Experimental changes or prototypes.
      * **Example:** `sandbox--header-animation-idea`

-----

## ✍️ Commit Message Guidelines

We follow a structured approach for commit messages to ensure a clear and traceable project history. This is based on Conventional Commits, with some specific adaptations.

Your commit message should include:

  * **Title (Subject Line):**
      * Maximum **50 characters**.
      * Must be prefixed by the **commit type (lowercase)**, optionally followed by a **scope** in parentheses.
          * **Examples:** `feat(form): Add Sentence Count`, `chore: Update Dependencies`.
      * The title should end with the last word, **without a full stop**.
      * The **first letter of nouns, pronouns, verbs, adjectives, and adverbs must be capitalised**. Small words like articles (the, a, an) are generally all lowercase unless they’re the first word in the title.
      * Use **present tense** and **imperative mood** (e.g., "Add Feature", not "Added Feature" or "Adds Feature").
      * To indicate a **breaking change**, add an exclamation mark `!` after the type/scope (e.g., `feat!: Remove Deprecated Endpoint`) or include `BREAKING CHANGE:` in the footer.
  * **Body (Optional):**
      * Adds more detail to the commit.
      * Follows **Sentence case**.
      * Wrap body text at **72 characters per line**.
  * **Footer (Optional):**
      * For issue references (e.g., `Closes #123`, `Fixes #456`).
      * For `BREAKING CHANGE` descriptions if not indicated in the title (e.g., `BREAKING CHANGE: The /v1/status endpoint has been removed.`).
      * Follows **Sentence case**.

### Recognised Commit Types:

  * **`feat`**: Introduces a new feature.
      * **Example:** `feat(auth): Add Password Reset Functionality`
  * **`fix`**: Patches a bug.
      * **Example:** `fix(cart): Correct Item Count on Checkout`
  * **`docs`**: Updates or adds documentation.
      * **Example:** `docs(readme): Clarify Setup Instructions`
  * **`style`**: Changes code formatting or style (no logic changes).
      * **Example:** `style: Reformat Code with ESLint Rules`
  * **`refactor`**: Rewrites code without changing behaviour (e.g., clean-up, restructuring).
      * **Example:** `refactor(api): Simplify Response Handler`
  * **`test`**: Adds or updates tests.
      * **Example:** `test: Add Unit Tests for Login Flow`
  * **`chore`**: Miscellaneous tasks (e.g., config updates, tooling).
      * **Example:** `chore: Update .gitignore File`
  * **`perf`**: Improves performance.
      * **Example:** `perf(image-loader): Reduce Memory Usage`
  * **`build`**: Changes related to build tools or dependencies.
      * **Example:** `build: Upgrade Webpack to v5`
  * **`ci`**: Changes to CI/CD configuration.
      * **Example:** `ci: Add GitHub Actions Workflow for Testing`
  * **`revert`**: Reverts a previous commit.
      * **Example:** `revert: Undo Feature Toggle for Dark Mode`
  * **`ops`**: Infrastructure or operational changes.
      * **Example:** `ops: Update Server Backup Schedule`

-----

## 💻 Contribution Workflow: Pull Requests

When you're ready to contribute code, please follow this workflow:

1.  **Fork the Repository:** If you haven't already, fork the `random-lorem-generator` repository.
2.  **Clone Your Fork:** Clone your fork locally.
3.  **Create a New Branch:** Always work on a new branch for your feature or bug fix. Choose a descriptive name that follows our [Branch Naming Conventions](#branch-naming-conventions).
    ```bash
    # Examples:
    git checkout -b feature--your-feature-name-here
    git checkout -b bugfix--your-bug-fix-name-here--AB
    ```
4.  **Make Your Changes:** Implement your bug fix, feature, or documentation improvement. Remember to follow the [Code Style Guidelines](#code-style-guidelines).
5.  **Commit Your Changes:** Write clear, concise commit messages that follow our [Commit Message Guidelines](#commit-message-guidelines).
    ```bash
    git add .
    git commit -m "feat(scope): Your Descriptive Commit Message"
    ```
6.  **Push to Your Fork:** Push your new branch to your forked repository on GitHub.
    ```bash
    git push origin feature--your-feature-name-here
    ```
7.  **Create a Pull Request (PR):**
      * Go to your forked repository on GitHub.
      * You should see a prompt to create a new pull request.
      * **Ensure your PR is submitted against the `develop` branch** of the main `random-lorem-generator` repository (not `master`).
      * Provide a clear and detailed description of your changes in the PR description. Link to any relevant issues (e.g., `Closes #123`).

-----

## 🙋‍♀️ Code of Conduct

To ensure a welcoming and inclusive environment for all contributors, we adhere to a [Code of Conduct](https://github.com/israelmartins96/random-lorem-generator/blob/master/CODE_OF_CONDUCT.md). By participating in this project, you are expected to uphold this code. Please read it thoroughly.

-----

## 💬 Communication & Support

We'll do our best to respond to issues and pull requests within **3 to 7 working days**. We appreciate your patience\!

If you have questions or need help outside of specific GitHub issues, you can reach out via:

  * **Email:** randomloremgenerator@lightbulbdevs.com

-----

## 💖 Thank You\!

Your contributions are highly valued and help make Random Lorem Generator a better tool for the entire community. Thank you for your support\!

-----