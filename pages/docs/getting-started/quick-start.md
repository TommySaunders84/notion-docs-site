---
title: Quick Start
description: Get up and running with Notion MCP in 5 minutes
---

# Quick Start

{% callout type="success" %}
This guide will get you running with Notion MCP in just 5 minutes. For detailed explanations, see the [full setup guide](/docs/getting-started/setup-guide).
{% /callout %}

## 🎯 Prerequisites Check

You need:
- ✅ Claude Desktop installed
- ✅ Node.js and npm installed
- ✅ GitHub account
- ✅ Notion workspace

## 🚀 Step 1: Get Your Tokens

### GitHub Token
1. Go to GitHub → Settings → Developer settings → [Personal access tokens](https://github.com/settings/tokens)
2. Generate new token (classic) with `repo` scope
3. Copy the token

### Notion Integration
1. Visit [Notion Integrations](https://www.notion.so/my-integrations)
2. Create new integration or use existing
3. Copy the Internal Integration Token

## 📝 Step 2: Create Config File

Create this file:
- **macOS/Linux**: `~/.config/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "$HOME/Desktop",
        "$HOME/Documents"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_YOUR_TOKEN_HERE"
      }
    },
    "notionMCP": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.notion.com/sse"]
    }
  }
}
```

## 🔄 Step 3: Update and Restart

1. Replace `ghp_YOUR_TOKEN_HERE` with your GitHub token
2. Update `$HOME` with your actual home directory path
3. Save the file
4. Quit Claude Desktop completely
5. Start Claude Desktop again

## ✅ Step 4: Test It!

Ask Claude:

```
"Can you list my GitHub repositories?"
```

```
"Search my Notion workspace for pages about projects"
```

```
"What files are on my Desktop?"
```

## 🎉 Success!

If Claude responds with your data, you're all set! 

## 🚀 What's Next?

### Enhance Your Setup
- [Configure Environment Variables](/docs/configuration/environment)
- [Set up OAuth for Notion](/docs/configuration/oauth-setup)
- [Explore API Functions](/docs/api-reference/functions)

### Try These Examples
- Create a Notion page: "Create a new page in my Notion workspace titled 'Meeting Notes'"
- Search GitHub: "Find all my repositories with 'api' in the name"
- File operations: "List all markdown files in my Documents folder"

## ⚡ Troubleshooting

### Claude says "I don't have access..."
1. Check config file location is correct
2. Verify JSON syntax (no trailing commas!)
3. Ensure you restarted Claude Desktop

### "Invalid token" errors
1. Verify your GitHub token hasn't expired
2. Check token has correct permissions
3. Ensure no extra spaces in token

### Notion not working
1. Make sure your Notion integration is active
2. Grant integration access to pages
3. Check [Notion setup guide](/docs/configuration/oauth-setup)

{% callout type="info" %}
**Pro tip**: Keep your tokens secure! Never share your configuration file or commit it to Git.
{% /callout %}

---

**Need more help?** Check the [detailed setup guide](/docs/getting-started/setup-guide) or [troubleshooting section](/docs/getting-started/setup-guide#troubleshooting).