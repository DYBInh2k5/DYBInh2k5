#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating SSb GitHub Profile Setup...\n');

// Check 1: Repository structure
const requiredFiles = [
  'README.md',
  'package.json',
  'tsconfig.json',
  '.env.example',
  'src/app.ts',
  'src/helpers/getFollowers.ts',
  'src/helpers/genFollowersHtml.ts',
  '.github/workflows/followers.yml'
];

console.log('📁 Checking file structure...');
let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check 2: Package.json validation
console.log('\n📦 Checking package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  const requiredDeps = ['axios', 'dotenv'];
  const requiredDevDeps = ['@types/node', 'typescript', 'ts-node'];
  
  requiredDeps.forEach(dep => {
    if (pkg.dependencies && pkg.dependencies[dep]) {
      console.log(`  ✅ ${dep}: ${pkg.dependencies[dep]}`);
    } else {
      console.log(`  ❌ ${dep} - MISSING from dependencies`);
      allFilesExist = false;
    }
  });
  
  requiredDevDeps.forEach(dep => {
    if (pkg.devDependencies && pkg.devDependencies[dep]) {
      console.log(`  ✅ ${dep}: ${pkg.devDependencies[dep]}`);
    } else {
      console.log(`  ❌ ${dep} - MISSING from devDependencies`);
      allFilesExist = false;
    }
  });
  
} catch (error) {
  console.log('  ❌ Error reading package.json:', error.message);
  allFilesExist = false;
}

// Check 3: Environment setup
console.log('\n🔐 Checking environment setup...');
if (fs.existsSync('.env')) {
  console.log('  ✅ .env file exists');
  const envContent = fs.readFileSync('.env', 'utf8');
  if (envContent.includes('GITHUB_TOKEN=')) {
    console.log('  ✅ GITHUB_TOKEN configured');
  } else {
    console.log('  ⚠️  GITHUB_TOKEN not found in .env');
  }
} else {
  console.log('  ⚠️  .env file not found (create from .env.example)');
}

// Check 4: README.md structure
console.log('\n📄 Checking README.md structure...');
try {
  const readme = fs.readFileSync('README.md', 'utf8');
  
  const requiredSections = [
    '# Võ Duy Bình',
    '<!-- FOLLOWER-LIST:START -->',
    '<!-- FOLLOWER-LIST:END -->',
    'github.com/DYBInh2k5'
  ];
  
  requiredSections.forEach(section => {
    if (readme.includes(section)) {
      console.log(`  ✅ Contains: ${section}`);
    } else {
      console.log(`  ❌ Missing: ${section}`);
      allFilesExist = false;
    }
  });
  
} catch (error) {
  console.log('  ❌ Error reading README.md:', error.message);
  allFilesExist = false;
}

// Check 5: GitHub Actions workflow
console.log('\n⚙️  Checking GitHub Actions workflow...');
try {
  const workflow = fs.readFileSync('.github/workflows/followers.yml', 'utf8');
  
  if (workflow.includes('GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}')) {
    console.log('  ✅ GitHub token configured in workflow');
  } else {
    console.log('  ❌ GitHub token not configured in workflow');
    allFilesExist = false;
  }
  
  if (workflow.includes('npm ci')) {
    console.log('  ✅ Uses npm ci for faster installs');
  } else {
    console.log('  ⚠️  Consider using npm ci instead of npm install');
  }
  
} catch (error) {
  console.log('  ❌ Error reading workflow file:', error.message);
  allFilesExist = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 VALIDATION PASSED! Your SSb GitHub profile is ready to go live!');
  console.log('\nNext steps:');
  console.log('1. npm install');
  console.log('2. Create .env with your GitHub token');
  console.log('3. npm run update-followers');
  console.log('4. git push origin main');
  console.log('\n🚀 Your profile will be live at: https://github.com/DYBInh2k5');
} else {
  console.log('❌ VALIDATION FAILED! Please fix the issues above.');
  console.log('\nRun this script again after fixing the issues.');
}
console.log('='.repeat(50));