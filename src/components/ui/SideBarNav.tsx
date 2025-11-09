'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Section } from './Section';
import { FolderItem } from './FolderItem';
import { FileItem } from './FileItem';
import { SECTIONS_CONFIG } from '@/data/sideBarConfig';

interface SideBarNavProps {
  className?: string;
}

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
