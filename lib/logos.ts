/**
 * Get logo URL from logo.dev or similar services
 * Logo.dev format: https://logo.dev/{name}?token={token}
 * Alternative: Simple Icons or Clearbit Logo API
 */

export function getCompanyLogoUrl(companyName: string): string {
  // Normalize company name for URL
  const normalized = companyName.toLowerCase().replace(/\s+/g, '-');
  
  // Option 1: Using logo.dev (requires API token)
  // return `https://logo.dev/${normalized}?token=YOUR_TOKEN`;
  
  // Option 2: Using Clearbit Logo API (free, no token needed)
  // Extract domain from company name or use company name directly
  const domain = companyName.toLowerCase().replace(/\s+/g, '');
  return `https://logo.clearbit.com/${domain}.com`;
  
  // Option 3: Using Simple Icons CDN (for tech logos)
  // return `https://cdn.simpleicons.org/${normalized}`;
}

export function getTechLogoUrl(techName: string): string {
  // Normalize tech name for URL
  const normalized = techName.toLowerCase().replace(/\s+/g, '');
  
  // Using Simple Icons CDN (free, no token needed)
  // Maps common tech names to Simple Icons slugs
  const techMap: Record<string, string> = {
    'react': 'react',
    'typescript': 'typescript',
    'node.js': 'nodedotjs',
    'nodejs': 'nodedotjs',
    'python': 'python',
    'jira': 'jira',
    'figma': 'figma',
    'sql': 'postgresql', // or 'mysql' depending on preference
    'agile': 'agile',
  };
  
  const iconSlug = techMap[normalized] || normalized;
  return `https://cdn.simpleicons.org/${iconSlug}`;
}
