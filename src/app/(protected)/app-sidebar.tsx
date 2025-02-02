"use client"

import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Link, Plus, Presentation } from "lucide-react"
import { usePathname } from "next/navigation"





const items = [
    {
        title : "DashBoard",
        url : '/dashboard',
        icon : LayoutDashboard,
    },
    {
        title : "Q&A",
        url : '/qa',
        icon : Bot,
    },
    {
        title : "Meetings",
        url : '/meetings',
        icon : Presentation,
    },
    {
        title : "Billing",
        url : '/billing',
        icon : CreditCard,
    }
]

const projects = [
    {
        name : 'Project 1'
    },
    {
        name : 'Project 2'
    },
    {
        name : 'Project 3'
    },
]


export function AppSideBar(){
    const pathname = usePathname();
   return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        logo
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>
                Application
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map(item => {
                    return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                             <Link href={item.url} className={cn({
                                '!bg-primary !text-white' : pathname === item.url
                             }, 'list-none')}>
                                <item.icon/>
                                <span>{item.title}</span>
                             </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarGroupLabel>
                Your Project
                <SidebarGroupContent>
                    <SidebarMenu>
                        {projects.map(project => {
                            return (
                                <SidebarMenuItem key={project.name}>
                                   <SidebarMenuButton asChild>
                                    <div>
                                        <div className={cn(
                                            'rounded-sm border size-6 flex items-center justify-center text-sm bg-whitetext-primary',
                                            {
                                                'bg-primary text-white' : true
                                            }
                                        )}>
                                            {project.name[0]}
                                            </div>
                                            <span> {project.name}</span>
                                    </div>
                                   </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}

                        <div className="h-2"></div>
                        <SidebarMenuItem>
                            <Link href='/create'>
                              <Button size='sm' variant={'outline'} className="w-fit">
                                <Plus/>
                              Create Project
                              </Button>
                            </Link>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
   )
}