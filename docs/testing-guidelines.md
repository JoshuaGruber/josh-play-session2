# Testing Guidelines

## General Principles
- All code must be covered by automated tests before merging.
- Tests should be clear, maintainable, and isolated from external dependencies.
- Use descriptive names for test cases and group related tests logically.
- All new features, bug fixes, and refactors require corresponding tests.

## Types of Tests
- **Unit Tests:** Cover individual functions, components, and modules. Mock dependencies to ensure isolation.
- **Integration Tests:** Validate interactions between multiple modules or components. Use real or mocked data as appropriate.
- **End-to-End (E2E) Tests:** Simulate real user workflows in the application. Cover critical user journeys and edge cases.
- **Accessibility Tests:** Ensure all UI elements meet accessibility standards (ARIA roles, keyboard navigation, color contrast).
- **Regression Tests:** Prevent previously fixed bugs from reappearing. Add tests for every bug fix.

## Coverage Requirements
- Minimum 90% code coverage for all modules and components.
- No critical code paths should be left untested.
- Coverage reports must be generated and reviewed for every pull request.

## Tooling
- Use Jest for all unit and integration tests.
- Use React Testing Library for front-end component tests.
- Use Cypress or Playwright for E2E tests.
- Use axe-core or similar tools for accessibility testing.

## Test Structure
- Place all test files in a `__tests__` directory adjacent to the code being tested.
- Name test files with `.test.js` or `.spec.js` suffix.
- Use setup and teardown hooks to prepare and clean up test environments.

## Best Practices
- Write tests before or alongside implementation (TDD/BDD encouraged).
- Mock network requests and external services.
- Avoid relying on global state or shared resources between tests.
- Use snapshot testing for UI components where appropriate, but avoid overuse.
- Test edge cases, error handling, and boundary conditions.
- Ensure tests run quickly and reliably in CI/CD pipelines.

## Pull Request Requirements
- All PRs must pass all tests and meet coverage requirements before merging.
- PRs should include a summary of test coverage and any new/changed tests.
- Flaky or unreliable tests must be fixed or removed before merging.

## Continuous Improvement
- Regularly review and refactor tests for clarity and maintainability.
- Update tests promptly when requirements or code change.
- Encourage peer review of test code as part of code review.

## Example Checklist
- [ ] Unit tests for all new code
- [ ] Integration tests for new features
- [ ] E2E tests for user workflows
- [ ] Accessibility tests for UI changes
- [ ] Coverage report reviewed
- [ ] All tests pass in CI
