# GitHub Profile Auto-Updater Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup GitHub Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes: `read:user` and `user:follow`
4. Copy the generated token

### 3. Configure Environment
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your token
GITHUB_TOKEN=your_github_token_here
```

### 4. Update Followers
```bash
# Build and run
npm run update-followers

# Or run in development mode
npm run dev
```

## 📁 Project Structure
```
├── src/
│   ├── app.ts                 # Main application
│   └── helpers/
│       ├── getFollowers.ts    # Fetch followers from GitHub API
│       └── genFollowersHtml.ts # Generate HTML table
├── dist/                      # Compiled JavaScript (auto-generated)
├── README.md                  # Your GitHub profile
├── package.json              # Project configuration
├── package-lock.json         # NPM lock file (auto-generated)
├── tsconfig.json             # TypeScript configuration
└── .env                      # Environment variables (create this)
```

## 🔧 Available Scripts

- `npm run dev` - Run in development mode with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run compiled JavaScript
- `npm run update-followers` - Build and update followers list
- `npm install` - Install all dependencies

## 🛠️ Troubleshooting

### Common Issues:

1. **"Cannot find module 'axios'"**
   ```bash
   npm install
   ```

2. **"GitHub API token is required"**
   - Make sure you created `.env` file with `GITHUB_TOKEN`
   - Check that your token has correct permissions

3. **"API rate limit exceeded"**
   - Wait for rate limit to reset (usually 1 hour)
   - Make sure you're using authenticated requests

4. **Mixed package managers**
   - Use only `npm` commands (not `yarn`)
   - Delete `yarn.lock` if it exists
   - Use `package-lock.json` for dependency locking

### Environment Variables:
- `GITHUB_TOKEN` - Your GitHub personal access token (required)

## 📝 Customization

To customize the follower display:
1. Edit `src/helpers/genFollowersHtml.ts` to change HTML structure
2. Modify `README.md` to update profile information
3. Run `npm run update-followers` to apply changes

## 🔄 Automation

You can set up GitHub Actions to automatically update your followers list:
1. Add your `GITHUB_TOKEN` to repository secrets
2. Create `.github/workflows/update-followers.yml`
3. Schedule regular updates (daily/weekly)

---

**Author**: Võ Duy Bình  
**Email**: binh.vd01500@sinhvien.hoasen.edu.vn  
**GitHub**: [@DYBInh2k5](https://github.com/DYBInh2k5)