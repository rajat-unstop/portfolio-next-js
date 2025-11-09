export interface FileConfig {
  name: string;
  iconColor?: string;
}

export interface FolderConfig {
  name: string;
  iconColor: string;
  files: FileConfig[];
}

export interface SectionConfig {
  title: string;
  folders?: FolderConfig[];
  files?: FileConfig[];
}

// Configuration map for all sections
export const SECTIONS_CONFIG: Record<string, SectionConfig[]> = {
  personal: [
    {
      title: 'personal-info',
      files: [
        { name: 'bio', iconColor: '#94a3b8' },
        { name: 'interests', iconColor: '#94a3b8' },
      ],
      folders: [
        {
          name: 'education',
          iconColor: '#ec4899',
          files: [
            { name: 'high-school', iconColor: '#94a3b8' },
            { name: 'university', iconColor: '#94a3b8' },
          ],
        },
      ],
    },
    {
      title: 'contacts',
      files: [
        { name: 'email.md', iconColor: '#94a3b8' },
        { name: 'phone.md', iconColor: '#94a3b8' },
      ],
    },
  ],
  professional: [
    {
      title: 'professional-info',
      folders: [
        {
          name: 'work-experience',
          iconColor: '#3b82f6',
          files: [
            { name: 'current-role.md', iconColor: '#94a3b8' },
            { name: 'previous-roles.md', iconColor: '#94a3b8' },
            { name: 'achievements.md', iconColor: '#94a3b8' },
          ],
        },
        {
          name: 'skills',
          iconColor: '#10b981',
          files: [
            { name: 'technical.md', iconColor: '#94a3b8' },
            { name: 'soft-skills.md', iconColor: '#94a3b8' },
          ],
        },
        {
          name: 'certifications',
          iconColor: '#f59e0b',
          files: [{ name: 'certificates.md', iconColor: '#94a3b8' }],
        },
      ],
    },
  ],
  hobbies: [
    {
      title: 'hobbies',
      folders: [
        {
          name: 'gaming',
          iconColor: '#f59e0b',
          files: [
            { name: 'favorite-games.md', iconColor: '#94a3b8' },
            { name: 'gaming-setup.md', iconColor: '#94a3b8' },
          ],
        },
        {
          name: 'sports',
          iconColor: '#ef4444',
          files: [
            { name: 'activities.md', iconColor: '#94a3b8' },
            { name: 'achievements.md', iconColor: '#94a3b8' },
          ],
        },
        {
          name: 'creative',
          iconColor: '#a855f7',
          files: [
            { name: 'art.md', iconColor: '#94a3b8' },
            { name: 'music.md', iconColor: '#94a3b8' },
          ],
        },
      ],
    },
  ],
  all: [
    {
      title: 'personal-info',
      folders: [
        {
          name: 'bio',
          iconColor: '#ec4899',
          files: [
            { name: 'education.md', iconColor: '#94a3b8' },
            { name: 'interests.md', iconColor: '#94a3b8' },
          ],
        },
        {
          name: 'contacts',
          iconColor: '#8b5cf6',
          files: [
            { name: 'email.md', iconColor: '#94a3b8' },
            { name: 'social.md', iconColor: '#94a3b8' },
          ],
        },
      ],
    },
    {
      title: 'professional-info',
      folders: [
        {
          name: 'experience',
          iconColor: '#3b82f6',
          files: [
            { name: 'work-history.md', iconColor: '#94a3b8' },
            { name: 'projects.md', iconColor: '#94a3b8' },
          ],
        },
        {
          name: 'skills',
          iconColor: '#10b981',
          files: [
            { name: 'technical.md', iconColor: '#94a3b8' },
            { name: 'languages.md', iconColor: '#94a3b8' },
          ],
        },
      ],
    },
    {
      title: 'hobbies',
      folders: [
        {
          name: 'gaming',
          iconColor: '#f59e0b',
          files: [{ name: 'favorite-games.md', iconColor: '#94a3b8' }],
        },
        {
          name: 'sports',
          iconColor: '#ef4444',
          files: [{ name: 'activities.md', iconColor: '#94a3b8' }],
        },
      ],
    },
  ],
};
