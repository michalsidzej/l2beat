import React from 'react'
import { PageContent } from '../../../../components/PageContent'
import { ScrollToTopButton } from '../../../../components/ScrollToTopButton'
import { DashboardLayout } from '../../../../layouts/DashboardLayout'
import { cn } from '../../../../utils/cn'
import { DesktopProjectNavigation } from '../../components/DesktopProjectNavigation'
import { MobileProjectNavigation } from '../../components/MobileProjectNavigation'
import {
  ProjectDetails,
  ProjectDetailsProps,
} from '../../components/ProjectDetails'
import {
  ScalingProjectHeader,
  ScalingProjectHeaderProps,
} from '../../components/ScalingProjectHeader'

export interface ProjectPageProps {
  projectHeader: ScalingProjectHeaderProps
  projectDetails: ProjectDetailsProps
}

export function ProjectPage(props: ProjectPageProps) {
  const navigationSections = props.projectDetails.items.filter(
    (section) => !section.excludeFromNavigation,
  )
  const isNavigationEmpty = navigationSections.length === 0

  return (
    <DashboardLayout>
      {!isNavigationEmpty && (
        <div className="sticky top-0 z-100 md:hidden">
          <MobileProjectNavigation sections={props.projectDetails.items} />
        </div>
      )}
      <PageContent
        mobileFull
        className={cn(isNavigationEmpty ? 'mb-0' : 'mb-20')}
      >
        <ScalingProjectHeader {...props.projectHeader} />
        {isNavigationEmpty ? (
          <ProjectDetails {...props.projectDetails} />
        ) : (
          <div className="gap-x-12 md:flex">
            <div className="mt-16 hidden w-[230px] shrink-0 md:block">
              <DesktopProjectNavigation
                project={{
                  title: props.projectHeader.title,
                  icon: props.projectHeader.icon,
                  showProjectUnderReview: props.projectHeader.isUnderReview,
                }}
                sections={props.projectDetails.items}
              />
            </div>
            <div className="w-full">
              <ProjectDetails {...props.projectDetails} />
            </div>
          </div>
        )}
      </PageContent>
      <ScrollToTopButton />
    </DashboardLayout>
  )
}
