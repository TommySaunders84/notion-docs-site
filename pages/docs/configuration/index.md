---
title: Configuration
description: Complete configuration reference for Notion MCP integrations
---

# Configuration Guide

This section covers all configuration aspects of Notion MCP integrations, from basic Claude Desktop setup to production environment variables.

## 📋 Configuration Overview

### [Claude Desktop Configuration](/docs/configuration/claude-desktop)
Learn how to configure Claude Desktop with MCP servers:
- Filesystem access setup
- GitHub integration
- Notion MCP connection
- Troubleshooting tips

### [Environment Variables](/docs/configuration/environment)
Comprehensive guide to environment configuration:
- OAuth credentials
- API endpoints
- Security settings
- Production deployment

### [OAuth Setup](/docs/configuration/oauth-setup)
Configure Notion OAuth integration:
- Create Notion integration
- Configure redirect URIs
- Set up authorization flow
- Test OAuth connection

## 🔐 Security First

{% securityWarning %}
All configuration examples use placeholder values. Never commit real credentials to version control. Always use environment variables for sensitive data in production.
{% /securityWarning %}

## 🎯 Quick Configuration

### 1. Basic Claude Desktop Setup
```json
{
  "mcpServers": {
    "notionMCP": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.notion.com/sse"]
    }
  }
}
```

### 2. Essential Environment Variables
```bash
NOTION_CLIENT_ID=your-client-id-here
NOTION_CLIENT_SECRET=your-client-secret-here
NOTION_INTERNAL_TOKEN=your-internal-token-here
```

### 3. OAuth Configuration
- Redirect URI: `https://your-domain.com/callback`
- Scopes: `read_content,update_content,insert_content`

## 📑 Configuration Files

### Required Files
1. **Claude Desktop Config**: `claude_desktop_config.json`
2. **Environment Variables**: `.env`
3. **Docker Config**: `docker-compose.yml` (for production)

### Optional Files
- **Netlify Config**: `netlify.toml`
- **GitHub Actions**: `.github/workflows/deploy.yml`

## 🛠️ Configuration Tools

### Validation
- JSON validators for config files
- Environment variable checkers
- OAuth flow testers

### Management
- Secret management systems
- Configuration deployment
- Version control strategies

## 📊 Configuration Priorities

1. **Security**: Protect all credentials
2. **Flexibility**: Use environment variables
3. **Documentation**: Comment your configs
4. **Validation**: Test before deploying

## 🚀 Next Steps

Ready to configure? Start with:
1. [Claude Desktop Setup](/docs/configuration/claude-desktop)
2. [Environment Variables](/docs/configuration/environment)
3. [OAuth Configuration](/docs/configuration/oauth-setup)

---

**Pro tip**: Always test your configuration in a development environment before deploying to production!