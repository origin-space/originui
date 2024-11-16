// Dependencies: pnpm install lucide-react

'use client';

import { Bell } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function NotificationButton() {
    const [count, setCount] = useState(6);

    return (
        <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={() => setCount(prev => prev - 1)}
            aria-label={`${count} unread notifications`}
        >
            <Bell className="h-[1.2rem] w-[1.2rem]" />
            {count > 0 && (
                <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-primary-foreground bg-primary rounded-full -top-2 -right-2">
                    {count}
                </span>
            )}
            <span className="sr-only">Notifications</span>
        </Button>
    );
}