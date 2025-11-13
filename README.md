# demo-codeql

This repository demonstrates CodeQL security scanning for C/C++ code using GitHub Actions.

## CodeQL Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/codeql.yml`) that automatically scans C code for security vulnerabilities and code quality issues.

### Workflow Triggers

- **Push**: Runs on every push to `main` or `master` branches
- **Pull Request**: Runs on pull requests targeting `main` or `master` branches
- **Schedule**: Runs weekly on Sundays at midnight (UTC) for regular security scans

### Features

- Uses CodeQL v3 with the latest actions
- Analyzes C/C++ code with both security and quality queries
- Automatic build detection with autobuild
- Results uploaded to GitHub Security tab

## Example Code

The repository includes a simple C program (`main.c`) to demonstrate the workflow functionality.

### Building

```bash
gcc -o main main.c
./main
```

## Security

Security scan results are available in the Security tab of the repository under "Code scanning alerts".