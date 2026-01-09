# 🚀 Quick Start

## Install & Run
```bash
# 1. Install dependencies
npm install

# 2. Test basic setup (optional)
npm run test-setup

# 3. Create .env file
cp .env.example .env
# Add your GitHub token to .env

# 4. Update followers
npm run update-followers
```

## GitHub Token Setup
1. Go to: https://github.com/settings/tokens
2. Generate new token with `read:user` scope
3. Add to `.env`: `GITHUB_TOKEN=your_token_here`

## 🛠️ Troubleshooting

### TypeScript Errors
The TypeScript errors you see are normal before running `npm install`. They will be resolved after installing dependencies.

### Common Issues
```bash
# If you see "Cannot find module" errors:
npm install

# If build fails:
npm run clean
npm run build

# Test if everything works:
npm run test-setup
```

That's it! Your README.md will be updated with latest followers. 🎉