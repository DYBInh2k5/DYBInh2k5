import axios from "axios"

const url = "https://api.github.com/user/followers"

// Get API key from environment variable or command line argument
const apiKey = process.env.GITHUB_TOKEN || process.argv[2]

const getFollowers = async (): Promise<any> => {
  if (!apiKey) {
    throw new Error("GitHub API token is required. Set GITHUB_TOKEN environment variable or pass as argument.")
  }

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `token ${apiKey}`,
        "User-Agent": "DYBInh2k5-Profile-Updater"
      },
    })

    console.log(`✅ Successfully fetched ${data.length} followers`)
    return data
  } catch (error: any) {
    console.error("❌ Error fetching followers:", error.response?.data || error.message)
    throw error
  }
}

export default getFollowers
