---
title: Prerequisites
description: Everything you need before setting up Notion MCP integrations
---

# Prerequisites

Before setting up Notion MCP integrations with Claude Desktop, ensure you have all the necessary requirements.

## 💻 System Requirements

### Operating System
- **macOS**: 10.15 (Catalina) or later
- **Windows**: Windows 10 or later
- **Linux**: Ubuntu 20.04 or equivalent

### Hardware
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 1GB free space
- **Internet**: Stable connection required

## 🔧 Required Software

### 1. Claude Desktop
- Download from [Claude Desktop official site](https://claude.ai/download)
- Latest version recommended
- Ensure you have a valid Claude account

### 2. Node.js and npm
- **Version**: Node.js 16.x or later
- **Download**: [nodejs.org](https://nodejs.org/)
- **Verify installation**:
  ```bash
  node --version
  npm --version
  npx --version
  ```

{% callout type="info" %}
npx is included with npm 5.2+ and is required for running MCP servers.
{% /callout %}

### 3. Git (Optional but Recommended)
- For cloning repositories and version control
- Download from [git-scm.com](https://git-scm.com/)

## 🔐 Required Accounts and Tokens

### 1. GitHub Account
- Free account at [github.com](https://github.com)
- Personal Access Token with permissions:
  - `repo` - Full control of private repositories
  - `read:org` - Read organization membership
  - `read:user` - Read user profile data

### 2. Notion Account
- Workspace with admin permissions
- OAuth integration configured
- Internal integration token (for server-side operations)

### 3. Claude Account
- Active Claude Desktop subscription
- Logged in to Claude Desktop app

## 📝 Preparation Checklist

Before proceeding to setup, ensure you have:

- [ ] Claude Desktop installed and running
- [ ] Node.js and npm installed
- [ ] GitHub account created
- [ ] GitHub Personal Access Token generated
- [ ] Notion workspace available
- [ ] Admin access to Notion workspace
- [ ] Basic familiarity with JSON configuration

## 🛡️ Security Considerations

### Token Management
- Store tokens securely
- Never commit tokens to version control
- Use environment variables for production
- Rotate tokens regularly

### File Permissions
- Limit filesystem access to necessary directories
- Review MCP server permissions
- Keep configuration files secure

{% securityWarning %}
Never share your personal access tokens or configuration files containing credentials. Always use placeholders in documentation and examples.
{% /securityWarning %}

## 🚀 Quick Verification

Run these commands to verify your environment:

```bash
# Check Node.js
node --version
# Should output: v16.x.x or later

# Check npm
npm --version
# Should output: 8.x.x or later

# Check npx
npx --version
# Should output: 8.x.x or later

# Check Git (optional)
git --version
# Should output: git version 2.x.x
```

## 📚 Additional Resources

- [Node.js Installation Guide](https://nodejs.org/en/download/package-manager/)
- [GitHub Token Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Notion API Documentation](https://developers.notion.com/)
- [Claude Desktop Support](https://support.anthropic.com)

## ✅ Ready to Continue?

Once you have all prerequisites:

1. → Continue to [Setup Guide](/docs/getting-started/setup-guide)
2. → Or jump to [Quick Start](/docs/getting-started/quick-start)

---

**Missing something?** Don't worry! Each prerequisite has links to help you get set up.