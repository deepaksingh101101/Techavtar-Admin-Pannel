'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction, useState } from 'react';
import { useSidebar } from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleExpand = (href: string) => {
    if (expandedItems.includes(href)) {
      setExpandedItems(expandedItems.filter(item => item !== href));
    } else {
      setExpandedItems([...expandedItems, href]);
    }
  };

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2 overflow-y-auto max-h-[80vh] no-scrollbar">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight'];
          const isExpanded = expandedItems.includes(item.href || '');

          return (
            <div key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  {item.subItems ? (
                    <div
                      onClick={() => handleExpand(item.href || '')}
                      className={cn(
                        'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                        path === item.href ? 'bg-accent' : 'transparent',
                        item.disabled && ' opacity-80',
                        'cursor-pointer'
                      )}
                    >
                      <Icon className={`ml-3 size-5`} />
                      {isMobileNav || (!isMinimized && !isMobileNav) ? (
                        <span className="mr-2 truncate">{item.title}</span>
                      ) : (
                        ''
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.disabled ? '/' : item.href || '/'}
                      className={cn(
                        'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                        path === item.href ? 'bg-accent' : 'transparent',
                        item.disabled && ' opacity-80'
                      )}
                      onClick={() => {
                        if (setOpen) setOpen(false);
                      }}
                    >
                      <Icon className={`ml-3 size-5`} />
                      {isMobileNav || (!isMinimized && !isMobileNav) ? (
                        <span className="mr-2 truncate">{item.title}</span>
                      ) : (
                        ''
                      )}
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
              {item.subItems && isExpanded && (
                <div className="ml-6 space-y-1">
                  {item.subItems.map((subItem, subIndex) => {
                    const SubIcon = Icons[subItem.icon || 'arrowRight'];
                    return (
                      <Tooltip key={subIndex}>
                        <TooltipTrigger asChild>
                          {subItem.href ? (
                            <Link
                              href={subItem.href}
                              className={cn(
                                'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                                path === subItem.href ? 'bg-accent' : 'transparent',
                                subItem.disabled && ' opacity-80'
                              )}
                              onClick={() => {
                                if (setOpen) setOpen(false);
                              }}
                            >
                              <SubIcon className={`ml-1 size-5`} />
                              {isMobileNav || (!isMinimized && !isMobileNav) ? (
                                <span className="mr-2 truncate">{subItem.title}</span>
                              ) : (
                                ''
                              )}
                            </Link>
                          ) : (
                            <div
                              className={cn(
                                'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium opacity-80 cursor-not-allowed',
                              )}
                            >
                              <SubIcon className={`ml-1 size-5`} />
                              {isMobileNav || (!isMinimized && !isMobileNav) ? (
                                <span className="mr-2 truncate">{subItem.title}</span>
                              ) : (
                                ''
                              )}
                            </div>
                          )}
                        </TooltipTrigger>
                        <TooltipContent
                          align="center"
                          side="right"
                          sideOffset={8}
                          className={!isMinimized ? 'hidden' : 'inline-block'}
                        >
                          {subItem.title}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
