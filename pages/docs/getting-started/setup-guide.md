---
title: Claude Desktop MCP Setup Guide
description: Complete step-by-step guide for setting up Claude Desktop with Model Context Protocol servers
---

# Claude Desktop MCP Setup Guide

{% callout type="info" %}
This guide will help you configure Claude Desktop with MCP servers for filesystem, GitHub, and Notion integrations.
{% /callout %}

## Prerequisites

Before starting, ensure you have:

1. **Claude Desktop App** - Download and install Claude Desktop
2. **Node.js and npm** - Required for running MCP servers
3. **GitHub Personal Access Token** - For GitHub repository access
4. **Notion Integration** - Configured in your Notion workspace

## Configuration File Location

The Claude Desktop configuration file should be placed at:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

## Step 1: Create GitHub Personal Access Token

1. Navigate to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token" (classic)
3. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `read:org` (Read org and team membership)
   - `read:user` (Read user profile data)
4. Copy the generated token securely

{% callout type="warning" %}
Store your GitHub token securely. You won't be able to see it again!
{% /callout %}

## Step 2: Create Configuration File

Create the configuration file with the following content:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/Desktop",
        "/Users/YOUR_USERNAME/Documents"
      ]
    },
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN_HERE"
      }
    },
    "notionMCP": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.notion.com/sse"]
    }
  }
}
```

## Step 3: Replace Placeholder Values

### Update File Paths
Replace `/Users/YOUR_USERNAME/` with your actual home directory path:
- macOS: `/Users/yourusername/`
- Windows: `C:\\Users\\yourusername\\`
- Linux: `/home/yourusername/`

### Add GitHub Token
Replace `YOUR_GITHUB_TOKEN_HERE` with your actual GitHub personal access token.

## Step 4: Configure MCP Servers

### Filesystem MCP Server
- **Purpose**: Provides Claude access to specified local directories
- **Configuration**: Update paths to directories you want accessible
- **Security**: Only grant access to trusted directories

### GitHub MCP Server
- **Purpose**: Enables Claude to interact with GitHub repositories
- **Capabilities**: Search, read, and analyze code in your repositories
- **Authentication**: Requires personal access token with appropriate permissions

### Notion MCP Server
- **Purpose**: Connects Claude to your Notion workspace
- **Configuration**: Uses remote MCP connection at `https://mcp.notion.com/sse`
- **Setup**: Ensure your Notion workspace has proper integration configured

## Step 5: Restart Claude Desktop

After saving the configuration file:

1. Completely quit Claude Desktop application
2. Restart the application to load new configuration
3. The MCP servers should now be available for use

## Verification

Once configured, test functionality by asking Claude to:

- "Search my Notion workspace for meeting notes"
- "Show me my GitHub repositories"
- "List files in my Desktop directory"
- "Create a new page in my Notion workspace"

## Troubleshooting

### If MCP Servers Aren't Working:

1. **Check file location**: Ensure config file is in the correct directory
2. **Validate JSON**: Make sure JSON syntax is correct (no trailing commas, proper quotes)
3. **Check permissions**: Verify Claude Desktop has necessary system permissions
4. **Verify npm/npx**: Run `npx --version` in terminal to ensure it's installed
5. **Review logs**: Check Claude Desktop logs for error messages

### Common Issues:

- **"Restricted Mode" warning**: This is normal behavior for MCP functionality
- **GitHub access errors**: 
  - Verify token has correct permissions
  - Check token expiration date
  - Ensure token isn't revoked
- **Notion connection fails**: 
  - Verify Notion integration is properly configured
  - Check Notion workspace permissions
- **Filesystem access denied**: 
  - Verify directory paths are correct
  - Check file and directory permissions
  - Ensure directories exist

{% securityWarning %}
**Never share your GitHub personal access token** publicly. Keep your configuration file secure and don't commit it to version control. Only grant filesystem access to directories you trust. Regularly rotate tokens for enhanced security.
{% /securityWarning %}

## Advanced Configuration

### Custom Directory Access

You can configure Claude to access specific directories:

```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/path/to/your/projects",
    "/path/to/your/documents",
    "/path/to/your/notes"
  ]
}
```

### Multiple GitHub Accounts

For multiple GitHub accounts, you may need separate configurations or token management strategies.

### Enterprise Notion

For Notion Enterprise accounts, additional security considerations may apply. Consult your IT department for specific requirements.

## Next Steps

After successful setup:

1. Configure [Environment Variables](/docs/configuration/environment)
2. Explore [Notion Functions](/docs/api-reference/functions)
3. Try [Example Scripts](/docs/examples/test-scripts)
4. Review [Security Best Practices](/docs/guides/best-practices)

---

**Need help?** Check our [troubleshooting guide](#troubleshooting) or create an issue on GitHub.