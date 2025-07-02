---
title: Claude Desktop Configuration
description: Detailed guide for configuring Claude Desktop with MCP servers
---

# Claude Desktop Configuration

{% callout type="info" %}
This guide provides detailed configuration options for Claude Desktop MCP servers including filesystem, GitHub, and Notion integrations.
{% /callout %}

## Configuration File Structure

The Claude Desktop configuration uses a JSON file with the following structure:

```json
{
  "mcpServers": {
    "serverName": {
      "command": "npx",
      "args": [/* server arguments */],
      "env": {/* environment variables */}
    }
  }
}
```

## Complete Configuration Example

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/Desktop",
        "/Users/YOUR_USERNAME/Documents",
        "/Users/YOUR_USERNAME/Projects"
      ]
    },
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN"
      }
    },
    "notionMCP": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.notion.com/sse"]
    }
  }
}
```

## Server Configurations

### Filesystem Server

Provides Claude access to local directories.

```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/path/to/directory1",
    "/path/to/directory2"
  ]
}
```

**Configuration Options:**
- Add multiple directory paths as arguments
- Use absolute paths for clarity
- Consider security when granting access

**Platform-Specific Paths:**
- macOS: `/Users/username/folder`
- Windows: `C:\\Users\\username\\folder`
- Linux: `/home/username/folder`

### GitHub Server

Enables repository access and code analysis.

```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
  }
}
```

**Token Permissions Required:**
- `repo` - Full repository access
- `read:org` - Organization membership
- `read:user` - User profile data

**Optional Permissions:**
- `workflow` - GitHub Actions access
- `read:project` - Project board access

### Notion Server

Connects to your Notion workspace.

```json
"notionMCP": {
  "command": "npx",
  "args": ["-y", "mcp-remote", "https://mcp.notion.com/sse"]
}
```

**Features:**
- Search workspace content
- Create and update pages
- Access databases
- Manage comments

## Advanced Configuration

### Custom Environment Variables

```json
"customServer": {
  "command": "node",
  "args": ["./my-server.js"],
  "env": {
    "API_KEY": "your-api-key",
    "BASE_URL": "https://api.example.com",
    "LOG_LEVEL": "debug"
  }
}
```

### Multiple Configurations

You can run multiple instances of the same server type:

```json
{
  "mcpServers": {
    "github-personal": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "personal-token"
      }
    },
    "github-work": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "work-token"
      }
    }
  }
}
```

## Platform-Specific Configuration

### macOS

```bash
# Configuration location
~/Library/Application Support/Claude/claude_desktop_config.json

# Create directory if needed
mkdir -p ~/Library/Application\ Support/Claude/

# Edit configuration
nano ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Windows

```powershell
# Configuration location
%APPDATA%\Claude\claude_desktop_config.json

# Create directory if needed
mkdir %APPDATA%\Claude

# Edit configuration
notepad %APPDATA%\Claude\claude_desktop_config.json
```

### Linux

```bash
# Configuration location
~/.config/Claude/claude_desktop_config.json

# Create directory if needed
mkdir -p ~/.config/Claude/

# Edit configuration
vim ~/.config/Claude/claude_desktop_config.json
```

## Troubleshooting

### Common Issues

#### MCP Servers Not Loading
1. Verify JSON syntax (no trailing commas)
2. Check file permissions
3. Ensure npx is in PATH
4. Restart Claude Desktop

#### Permission Errors
```bash
# Fix permissions on macOS/Linux
chmod 600 ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

#### Token Issues
- Verify token hasn't expired
- Check token permissions
- Ensure no whitespace in token

### Debug Mode

Enable verbose logging:

```json
"debugServer": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "--verbose"],
  "env": {
    "DEBUG": "*"
  }
}
```

## Best Practices

### Security

{% securityWarning %}
1. Never commit config files with tokens
2. Limit filesystem access to necessary directories
3. Rotate tokens regularly
4. Use read-only tokens when possible
{% /securityWarning %}

### Organization

1. **Group related servers**: Use descriptive names
2. **Document your config**: Add comments (though JSON doesn't support them)
3. **Version control**: Keep a template version
4. **Backup**: Save config before updates

### Performance

1. **Limit directory access**: Don't grant access to entire drives
2. **Optimize server count**: Only enable needed servers
3. **Monitor resources**: Check CPU/memory usage

## Examples

### Minimal Configuration

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

### Developer Configuration

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/dev/projects",
        "/Users/dev/notes"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "notionMCP": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.notion.com/sse"]
    }
  }
}
```

## Next Steps

- Configure [Environment Variables](/docs/configuration/environment)
- Set up [OAuth Integration](/docs/configuration/oauth-setup)
- Explore [API Functions](/docs/api-reference/functions)
- Review [Security Best Practices](/docs/guides/best-practices)

---

**Questions?** Check our [troubleshooting guide](#troubleshooting) or visit the [GitHub repository](https://github.com/TommySaunders84/notion-docs-site).