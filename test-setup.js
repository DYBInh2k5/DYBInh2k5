// Simple test to check if basic setup works
console.log("🧪 Testing basic setup...")

// Test Node.js globals
console.log("✅ process.version:", process.version)
console.log("✅ process.platform:", process.platform)

// Test if we can read package.json
const fs = require('fs')
const path = require('path')

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  console.log("✅ Package name:", packageJson.name)
  console.log("✅ Package version:", packageJson.version)
} catch (error) {
  console.error("❌ Error reading package.json:", error.message)
}

// Test environment
console.log("✅ NODE_ENV:", process.env.NODE_ENV || 'not set')
console.log("✅ GITHUB_TOKEN:", process.env.GITHUB_TOKEN ? 'set' : 'not set')

console.log("🎉 Basic setup test completed!")