'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Section } from './Section';
import { FolderItem } from './FolderItem';
import { FileItem } from './FileItem';

interface FileConfig {
  name: string;
  iconColor?: string;
}

interface FolderConfig {
  name: string;
  iconColor: string;
  files: FileConfig[];
}

interface SectionConfig {
  title: string;
  folders?: FolderConfig[];
  files?: FileConfig[];
}

interface SideBarNavProps {
  className?: string;
}

// Configuration map for all sections
const SECTIONS_CONFIG: Record<string, SectionConfig[]> = {
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

const SideBarNav: React.FC<SideBarNavProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Extract the section from pathname
  const getCurrentSection = (): 'personal' | 'professional' | 'hobbies' | 'all' => {
    if (pathname.includes('/professional')) return 'professional';
    if (pathname.includes('/personal')) return 'personal';
    if (pathname.includes('/hobbies')) return 'hobbies';
    return 'all';
  };

  // Extract the base path (e.g., '/aboutMe', '/projects', '/contactMe')
  const getBasePath = (): string => {
    const pathParts = pathname.split('/').filter(Boolean);
    // Return the first part of the path, or empty string if none
    return pathParts.length > 0 ? `/${pathParts[0]}` : '';
  };

  const isFileActive = (fileName: string, folderName?: string): boolean => {
    const pathParts = pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];

    const fileMatches = lastPart === fileName;

    if (folderName) {
      return fileMatches && pathname.includes(`/${folderName}/`);
    }

    return fileMatches;
  };

  // Check if a folder is currently active
  const isFolderActive = (folderName: string): boolean => {
    return pathname.includes(`/${folderName}/`);
  };

  const currentSection = getCurrentSection();
  const basePath = getBasePath();

  const handleFileClick = (fileName: string, folderName?: string) => {
    // console.log('File clicked:', fileName, 'Folder:', folderName);

    // Build the path: if folder exists, include it in the route
    const path = folderName
      ? `${basePath}/${currentSection}/${folderName}/${fileName}`
      : `${basePath}/${currentSection}/${fileName}`;

    router.push(path);
  };

  const handleFolderToggle = (folderName: string, isOpen: boolean) => {
    // console.log(`Folder ${folderName} is now ${isOpen ? 'open' : 'closed'}`);
  };

  // Get sections based on current pathname
  const sections = SECTIONS_CONFIG[currentSection] || SECTIONS_CONFIG.all;

  return (
    <div className={`w-full h-full border-r border-r-slate-500 ${className}`}>
      {sections.map((section, sectionIndex) => (
        <Section
          key={`section-${sectionIndex}`}
          title={section.title}
          defaultOpen={sectionIndex === 0}
          // onToggle={isOpen => console.log(`Section ${section.title} toggled:`, isOpen)}
        >
          {/* Render files directly in section if they exist */}
          {section.files?.map((file, fileIndex) => (
            <FileItem
              key={`file-${fileIndex}`}
              name={file.name}
              iconColor={file.iconColor}
              onClick={() => handleFileClick(file.name)}
              isActive={isFileActive(file.name)}
            />
          ))}

          {/* Render folders if they exist */}
          {section.folders?.map((folder, folderIndex) => (
            <FolderItem
              key={`folder-${folderIndex}`}
              name={folder.name}
              iconColor={folder.iconColor}
              defaultOpen={isFolderActive(folder.name)}
              onToggle={isOpen => handleFolderToggle(folder.name, isOpen)}
              isActive={isFolderActive(folder.name)}
            >
              {folder.files.map((file, fileIndex) => (
                <FileItem
                  key={`file-${fileIndex}`}
                  name={file.name}
                  iconColor={file.iconColor}
                  onClick={() => handleFileClick(file.name, folder.name)}
                  isActive={isFileActive(file.name, folder.name)}
                />
              ))}
            </FolderItem>
          ))}
        </Section>
      ))}
    </div>
  );
};

export default SideBarNav;
