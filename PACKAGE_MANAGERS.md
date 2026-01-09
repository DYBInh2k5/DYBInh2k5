# 📦 Package Manager Guide

## 🎯 Recommended: NPM

This project is configured to use **NPM** as the primary package manager.

### ✅ Use NPM commands:
```bash
npm install          # Install dependencies
npm run dev         # Run development
npm run build       # Build project
npm run start       # Run production
```

### ❌ Avoid mixing package managers:
```bash
# DON'T use these if you're using npm
yarn install
yarn dev
pnpm install
```

## 🔒 Lock Files

- **`package-lock.json`** ✅ - NPM lock file (keep this)
- **`yarn.lock`** ❌ - Yarn lock file (deleted)
- **`pnpm-lock.yaml`** ❌ - PNPM lock file (not used)

## 🤔 Why NPM?

1. **Consistency** - All scripts and CI/CD use npm
2. **Simplicity** - One package manager, less confusion
3. **GitHub Actions** - Better integration with npm cache
4. **Lock file** - `package-lock.json` ensures reproducible builds

## 🔄 If you prefer Yarn/PNPM

If you want to switch to another package manager:

1. Delete `package-lock.json`
2. Update scripts in `package.json`
3. Update GitHub Actions workflow
4. Update documentation

But for this project, **stick with NPM** for consistency! 🎯