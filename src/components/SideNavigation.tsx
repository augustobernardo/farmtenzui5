'use client';

import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from '@ui5/webcomponents-react';

export function SideNav() {
    return (
        <SideNavigation>
            <SideNavigationItem text="Item 1" icon="add">
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
            </SideNavigationItem>
            <SideNavigationItem text="Item 2" icon="add">
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
            </SideNavigationItem>
            <SideNavigationItem text="Item 3" icon="add">
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
            </SideNavigationItem>
        </SideNavigation>
    )
}

